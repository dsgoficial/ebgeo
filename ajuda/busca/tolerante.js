// Path: public/busca/tolerante.js

/**
 * Busca tolerante para quem não é da área, por cima do Pagefind.
 *
 * O Pagefind 1.x só devolve a página que tem TODAS as palavras da pergunta (não há OU, nem lista
 * de palavras vazias, nem opção que mude isso; o `processTerm` da interface troca o texto antes da
 * busca, mas não vê o resultado e por isso não sabe quando tentar de novo). Uma palavra que
 * nenhuma página tem derruba a pergunta inteira: "trazer o calco do google earth" não acha nada,
 * e "o calco do google earth" acha. Este módulo tenta em três degraus e para no primeiro que acha:
 *
 *   1. a pergunta inteira, como o Pagefind faz sozinho (quem acerta a palavra não perde nada);
 *   2. sem as palavras vazias do português (como, o, de, meu, não...), se havia alguma;
 *   3. palavra a palavra, juntando as páginas e ordenando por QUANTAS palavras cada uma casou e,
 *      no empate, pela soma dos escores do Pagefind.
 *
 * Arquivo estático, sem dependência: roda igual no navegador (`busca/pagefind.js`) e no Node
 * (`testes/apoio.mjs`, `ferramentas/avaliar-busca.mjs`), que é como a avaliação mede a busca que
 * o leitor usa.
 */

/**
 * Palavras vazias do português: artigos, preposições e suas contrações, pronomes, conjunções e as
 * formas de ser, estar e ter que só ligam a frase. Sem acento, porque a comparação tira o acento
 * (o Pagefind também ignora acento por padrão). Verbo de ação ("importar", "trazer", "fazer") não
 * entra: ele é o que a pessoa quer.
 */
export const PALAVRAS_VAZIAS = new Set(`
a o as os um uma uns umas
de do da dos das d no na nos nas em num numa ao aos pelo pela pelos pelas por para pra pro pras pros
com sem sob sobre entre ate desde
e ou mas nem que se porque pois quando onde como qual quais quem cujo
eu me mim meu minha meus minhas tu te ti teu tua voce voces seu sua seus suas ele ela eles elas lhe lhes
nos nosso nossa nossos nossas isso isto aquilo esse essa esses essas este esta estes estas aquele aquela
ja nao sim tambem so muito mais menos ainda aqui ali la
e eh esta estou estao estava era sao ser foi fica ficou tem ter tenho tinha ha
`.split(/\s+/).filter(Boolean));

/** Minúsculas e sem acento, para comparar com a lista. */
const normalizar = (palavra) => palavra.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

/**
 * As palavras de uma pergunta, na ordem, sem pontuação nem repetição.
 * @param {string} termo
 * @returns {string[]}
 */
export function palavrasDe(termo) {
    const vistas = new Set();
    return (termo ?? '').split(/[^\p{L}\p{N}]+/u).filter((p) => {
        const n = normalizar(p);
        if (!n || vistas.has(n)) return false;
        vistas.add(n);
        return true;
    });
}

/** Se a palavra é vazia (ver `PALAVRAS_VAZIAS`). */
export const vazia = (palavra) => PALAVRAS_VAZIAS.has(normalizar(palavra));

/**
 * O resultado do Pagefind com outra lista de páginas, no mesmo formato que a interface lê.
 * @param {object} base - Um resultado real do Pagefind (filtros e contagens vêm dele).
 * @param {object[]} resultados
 * @param {string} degrau
 */
function comResultados(base, resultados, degrau) {
    return { ...base, results: resultados, unfilteredResultCount: resultados.length, tolerancia: degrau };
}

/**
 * Busca com tolerância.
 * @param {(termo: string, opcoes?: object) => Promise<{results: Array<{id: string, score: number, words?: number[]}>}|null>} buscar
 *   O `search` do Pagefind.
 * @param {string} termo
 * @param {object} [opcoes] - Repassadas ao Pagefind (filtros, ordem).
 * @returns {Promise<object|null>} O resultado do Pagefind, com `tolerancia` dizendo o degrau que
 *   achou: `inteira`, `sem-palavras-vazias` ou `palavra-a-palavra`.
 */
export async function buscarTolerante(buscar, termo, opcoes) {
    const inteira = await buscar(termo, opcoes);
    // null: o Pagefind descartou esta busca porque outra mais nova chegou (debouncedSearch).
    if (!inteira) return inteira;
    if (inteira.results?.length) return { ...inteira, tolerancia: 'inteira' };

    const palavras = palavrasDe(termo);
    const cheias = palavras.filter((p) => !vazia(p));
    if (cheias.length === 0) return { ...inteira, tolerancia: 'inteira' };

    if (cheias.length < palavras.length) {
        const sem = await buscar(cheias.join(' '), opcoes);
        if (sem?.results?.length) return comResultados(sem, sem.results, 'sem-palavras-vazias');
    }
    if (cheias.length === 1) return { ...inteira, tolerancia: 'inteira' };

    const porPagina = new Map();
    for (const palavra of cheias) {
        const r = await buscar(palavra, opcoes);
        for (const x of r?.results ?? []) {
            const atual = porPagina.get(x.id);
            if (atual) {
                atual.casadas += 1;
                atual.escore += x.score ?? 0;
                atual.resultado = { ...atual.resultado, words: [...new Set([...(atual.resultado.words ?? []), ...(x.words ?? [])])] };
            } else {
                porPagina.set(x.id, { casadas: 1, escore: x.score ?? 0, resultado: x });
            }
        }
    }
    const juntos = [...porPagina.values()]
        .sort((a, b) => b.casadas - a.casadas || b.escore - a.escore)
        .map((p) => ({ ...p.resultado, score: p.escore, palavrasCasadas: p.casadas }));
    return comResultados(inteira, juntos, 'palavra-a-palavra');
}
