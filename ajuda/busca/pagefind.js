// Path: public/busca/pagefind.js

/**
 * O Pagefind da ajuda, com a busca tolerante (`tolerante.js`) no lugar do `search`.
 *
 * É a mesma API do `pagefind/pagefind.js` que o build gera, e é por ela que a interface de busca
 * entra: a interface carrega `${bundlePath}pagefind.js`, e `src/busca/pagefind-ui.js` aponta o
 * `bundlePath` para esta pasta. O Pagefind de verdade continua achando o seu índice sozinho,
 * pelo endereço do próprio arquivo (`../pagefind/`), sob qualquer prefixo.
 */

import * as pagefind from '../pagefind/pagefind.js';
import { buscarTolerante } from './tolerante.js';

export const { options, init, destroy, mergeIndex, preload, filters, createInstance } = pagefind;

/** A busca tolerante: a pergunta inteira, depois sem palavras vazias, depois palavra a palavra. */
export const search = (termo, opcoes) => buscarTolerante(pagefind.search, termo, opcoes);

/**
 * Com espera, como o do Pagefind: a busca descartada por uma mais nova continua devolvendo null,
 * e só a que vale passa pelos degraus da tolerância.
 */
export const debouncedSearch = async (termo, opcoes, esperaMs = 300) => {
    const primeira = await pagefind.debouncedSearch(termo, opcoes, esperaMs);
    if (primeira === null) return null;
    return buscarTolerante(async (t, o) => (t === termo ? primeira : pagefind.search(t, o)), termo, opcoes);
};
