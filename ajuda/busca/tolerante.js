// Path: public/busca/tolerante.js

/**
 * Busca tolerante para quem não é da área, por cima do Pagefind.
 *
 * O Pagefind 1.x só devolve a página que tem TODAS as palavras da pergunta (não há OU, nem lista
 * de palavras vazias, nem opção que mude isso; o `processTerm` da interface troca o texto antes da
 * busca, mas não vê o resultado e por isso não sabe quando tentar de novo). Uma palavra que
 * nenhuma página tem derruba a pergunta inteira: "trazer o calco do google earth" não acha nada,
 * e "o calco do google earth" acha. Este módulo tenta em três degraus:
 *
 *   1. a pergunta inteira, como o Pagefind faz sozinho (quem acerta a palavra não perde nada);
 *   2. sem as palavras vazias do português (como, o, de, meu, não...), se havia alguma;
 *   3. palavra a palavra, juntando as páginas e ordenando por QUANTAS palavras cada uma casou e,
 *      no empate, pela soma dos escores do Pagefind.
 *
 * Os degraus 1 e 2 param a busca só quando acham pelo menos `MINIMO_DE_RESULTADOS` páginas. Com
 * menos, a lista deles vem primeiro e o degrau 3 completa o resto: "ver o nome do córrego na
 * carta" achava UMA página no degrau 1, a errada (a que tem "Córrego Alegre"), e a certa nunca
 * aparecia (2026-10-22).
 *
 * Antes dos degraus, cada palavra conta só nas páginas que a têm de fato (`paginasComAPalavra`).
 * O Pagefind não devolve "nada" para a palavra que o índice não tem: troca-a por um prefixo curto
 * que existe e devolve as páginas desse prefixo, e "companhia" voltava como "com", 115 de 116
 * páginas. Mesmo a palavra que existe vem misturada com vizinhas de começo parecido: "cadeado"
 * trazia 80 páginas, 9 com "cadeado", e "caderneta" em 1º (2026-10-22). A palavra que nenhuma
 * página tem sai da pergunta; se nenhuma sobra, a resposta é vazia e a interface diz que não achou.
 *
 * Arquivo estático, sem dependência: roda igual no navegador (`busca/pagefind.js`) e no Node
 * (`testes/apoio.mjs`, `ferramentas/avaliar-busca.mjs`), que é como a avaliação mede a busca que
 * o leitor usa.
 */

/**
 * Palavras vazias do português: artigos, preposições e suas contrações, pronomes, conjunções e as
 * formas de ser, estar e ter que só ligam a frase. Sem acento, porque a comparação tira o acento
 * (o Pagefind também ignora acento por padrão). Verbo de ação ("importar", "trazer", "fazer") não
 * entra: ele é o que a pessoa quer. "quem" também não: é o que distingue "quem mexeu no meu calco"
 * (o Histórico) e "quem alcança este ponto", e como vazia derrubava a pergunta (2026-10-22).
 */
export const PALAVRAS_VAZIAS = new Set(`
a o as os um uma uns umas
de do da dos das d no na nos nas em num numa ao aos pelo pela pelos pelas por para pra pro pras pros
com sem sob sobre entre ate desde
e ou mas nem que se porque pois quando onde como qual quais cujo
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
 * Abaixo deste número de páginas, os degraus 1 e 2 não encerram a busca: o degrau 3 completa a
 * lista. É o tamanho do top-3 que a avaliação mede.
 */
export const MINIMO_DE_RESULTADOS = 3;

/**
 * A fração da palavra pedida que uma palavra da página precisa repetir, do começo, para a página
 * contar como tendo a palavra. Medido em 2026-10-22 no build da `main` (`39b19785c`): a flexão
 * fica de 0,6 para cima (mudei e mudo 0,60, estradinha e estrada 0,60, apagou e apagar 0,67,
 * desenhei e desenho 0,75); o prefixo curto que o Pagefind põe no lugar da palavra que não tem, e
 * a vizinha de começo parecido, ficam abaixo (pelotão e pelo 0,57, cadeado e caderneta 0,57,
 * notebook e notas 0,38, companhia e com 0,33, cia e C 0,33). A flexão de verbo e de plural que
 * fica abaixo (mexeram e mexeu 0,57, ligações e ligar 0,50) passa pelo núcleo (`nucleo`).
 */
export const FRACAO_DA_PALAVRA = 0.6;

/**
 * Terminações de flexão do português, sem acento, da mais longa para a mais curta: plural,
 * gênero, aumentativo e diminutivo, e as formas de verbo que a pergunta de quem procura usa
 * (mexeu, mexeram, apagando, apagado).
 */
const SUFIXOS_DE_FLEXAO = `
acoes icoes ucoes coes acao icao ucao cao oes aes aos ao inhas inhos inha inho zinho zinha
aram eram iram avam ando endo indo ados adas idos idas ado ada ido ida amos emos imos ava iam
ia ar er ir ou eu iu ei am em as es os a e o s
`.split(/\s+/).filter(Boolean).sort((a, b) => b.length - a.length);

/**
 * O núcleo da palavra (já normalizada): ela sem a terminação de flexão mais longa, sem ficar com
 * menos de 3 letras. "mexeram", "mexeu" e "mexer" dão "mex"; "ligações" e "ligar", "lig".
 * @param {string} palavra
 */
export function nucleo(palavra) {
    const sufixo = SUFIXOS_DE_FLEXAO.find((s) => palavra.endsWith(s) && palavra.length - s.length >= 3);
    return sufixo ? palavra.slice(0, -sufixo.length) : palavra;
}

/** Quantas letras do começo `a` e `b` têm iguais. */
function prefixoComum(a, b) {
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    return i;
}

/**
 * As páginas do resultado que têm a palavra de fato, na ordem do Pagefind. O Pagefind casa por
 * começo de palavra e não diz quando trocou a pedida: sem nenhuma palavra do índice que comece
 * como ela, casa um prefixo mais curto que existe ("companhia" vira "com", "pelotão" vira
 * "pelo"), e mesmo com ela no índice junta vizinhas de começo parecido ("cadeado" e
 * "caderneta"). Por isso se lê, no texto de cada página (`content` do `data()`), a palavra que
 * casou em cada posição (`words` do resultado): uma delas precisa repetir o começo da pedida em
 * pelo menos `FRACAO_DA_PALAVRA` das letras, ou ter o mesmo `nucleo` que ela e a letra seguinte.
 *
 * Lê o texto de toda página do resultado, que o Pagefind guarda depois da 1ª vez (são uns 490 KB
 * no build inteiro de 2026-10-22). As posições vêm de `words`, e não do `locations` do `data()`,
 * porque o Pagefind reescreve esse campo no mesmo objeto a cada `data()` da página.
 * @param {string} palavra
 * @param {{results?: Array<{id: string, words?: number[], data: () => Promise<{content?: string}>}>}|null} resultado
 * @returns {Promise<object[]>}
 */
export async function paginasComAPalavra(palavra, resultado) {
    const alvo = normalizar(palavra);
    const exigido = Math.ceil(alvo.length * FRACAO_DA_PALAVRA);
    const nucleoDoAlvo = nucleo(alvo);
    // No núcleo, a letra seguinte também tem de bater ("mexe-ram" e "mexe-u", "liga-ções" e
    // "liga-r"): sem ela, "comando" e "como" dariam o mesmo "com".
    const parecida = (pedaco) => {
        const comum = prefixoComum(pedaco, alvo);
        return comum >= exigido || (comum > nucleoDoAlvo.length && nucleo(pedaco) === nucleoDoAlvo);
    };
    const tem = async (x) => {
        const dados = await x.data();
        const texto = typeof dados?.content === 'string' ? dados.content.split(/\s+/) : [];
        return (x.words ?? []).some((posicao) => normalizar(texto[posicao] ?? '')
            .split(/[^\p{L}\p{N}]+/u)
            .some(parecida));
    };
    const resultados = resultado?.results ?? [];
    const marcas = await Promise.all(resultados.map(tem));
    return resultados.filter((_, i) => marcas[i]);
}

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
 *   achou: `inteira`, `sem-palavras-vazias`, `sem-palavras-ausentes` (tirada a palavra que o
 *   índice não tem), `palavra-a-palavra`, um dos dois primeiros seguido de `+palavra-a-palavra`
 *   (completado pelo degrau 3), ou `nenhuma-palavra-no-indice` (lista vazia).
 */
export async function buscarTolerante(buscar, termo, opcoes) {
    const inteira = await buscar(termo, opcoes);
    // null: o Pagefind descartou esta busca porque outra mais nova chegou (debouncedSearch).
    if (!inteira) return inteira;

    const palavras = palavrasDe(termo);
    const cheias = palavras.filter((p) => !vazia(p));
    if (cheias.length === 0) return { ...inteira, tolerancia: 'inteira' };

    // Cada palavra sozinha, só nas páginas que a têm de fato: diz que palavras o índice tem, filtra
    // os degraus 1 e 2 e já serve ao degrau 3. A pergunta de uma palavra só é a própria inteira.
    const comPalavra = new Map();
    for (const palavra of cheias) {
        const r = palavras.length === 1 ? inteira : await buscar(palavra, opcoes);
        const paginas = await paginasComAPalavra(palavra, r);
        if (paginas.length) comPalavra.set(palavra, paginas);
    }
    const presentes = [...comPalavra.keys()];
    if (presentes.length === 0) return comResultados(inteira, [], 'nenhuma-palavra-no-indice');

    // A página que vale nos degraus 1 e 2 tem TODAS as palavras presentes de fato; a vizinha de
    // começo parecido que o Pagefind juntou sai, na ordem dele.
    const emTodas = (r) => (r?.results ?? []).filter((x) => presentes.every((p) => comPalavra.get(p).some((y) => y.id === x.id)));

    // Degraus 1 e 2. Sem palavra ausente, a pergunta inteira e depois sem as vazias; com palavra
    // ausente, só as que existem (a inteira e a sem vazias levariam o prefixo trocado junto).
    let achou = null;
    const filtradaInteira = presentes.length === cheias.length ? emTodas(inteira) : [];
    if (filtradaInteira.length) {
        achou = { base: inteira, results: filtradaInteira, degrau: 'inteira' };
    } else if (presentes.length < cheias.length || cheias.length < palavras.length) {
        const sem = presentes.length === 1 ? { ...inteira, results: comPalavra.get(presentes[0]) } : await buscar(presentes.join(' '), opcoes);
        const results = emTodas(sem);
        const degrau = presentes.length < cheias.length ? 'sem-palavras-ausentes' : 'sem-palavras-vazias';
        if (results.length) achou = { base: sem, results, degrau };
    }
    if (achou && (achou.results.length >= MINIMO_DE_RESULTADOS || presentes.length === 1)) {
        if (achou.base === inteira && achou.results.length === inteira.results.length) return { ...inteira, tolerancia: 'inteira' };
        return comResultados(achou.base, achou.results, achou.degrau);
    }

    const porPagina = new Map();
    for (const palavra of presentes) {
        for (const x of comPalavra.get(palavra)) {
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
    if (!achou) return comResultados(inteira, juntos, 'palavra-a-palavra');
    // Poucas páginas nos degraus 1 ou 2: elas vêm primeiro, na ordem deles, e o degrau 3 completa
    // a lista. Cada uma leva a contagem e as posições do degrau 3, como as que vêm depois.
    const doDegrau3 = new Map(juntos.map((x) => [x.id, x]));
    const primeiras = achou.results.map((x) => doDegrau3.get(x.id) ?? x);
    const jaVieram = new Set(primeiras.map((x) => x.id));
    return comResultados(achou.base, [...primeiras, ...juntos.filter((x) => !jaVieram.has(x.id))], `${achou.degrau}+palavra-a-palavra`);
}
