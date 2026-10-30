# Fontes da carta

As três famílias que o compositor de Cartas embute (`FAMILIAS_DE_FONTE` em `frontend/src/js/cartas/fontes-da-carta.js`), cada uma em regular, negrito, itálico e negrito-itálico. São os arquivos oficiais do projeto Noto, sem modificação.

- Licença: SIL Open Font License 1.1, texto em `OFL.txt` desta pasta (de https://raw.githubusercontent.com/notofonts/latin-greek-cyrillic/main/OFL.txt).
- Procedência: distribuição oficial do Noto, `https://raw.githubusercontent.com/notofonts/notofonts.github.io/main/fonts/<Família>/hinted/ttf/<arquivo>`, com `<Família>` = `NotoSans` ou `NotoSerif`. Versão 2.015 (tabela `name`, id 5), baixados em 2026-10-19.
- Conferência: cabeçalho TrueType `00 01 00 00` em todos; nome de família e estilo lidos da tabela `name` (fontTools) e iguais aos da coluna Família abaixo; peso 400/700 e largura 5 (normal) ou 3 (condensada) na tabela `OS/2`.

| Família | Face | Arquivo | Bytes | SHA-256 |
|---|---|---|---|---|
| Noto Sans | Regular | NotoSans-Regular.ttf | 621572 | 478c558ea716033cd60c03438f628dfa75694dcf6b5f6d505a2f05fd2b4f3823 |
| Noto Sans | Bold | NotoSans-Bold.ttf | 631484 | 1df075a380fc7cb898acf64c1f7b3b4dd780de3caa860178bf929de35817a913 |
| Noto Sans | Italic | NotoSans-Italic.ttf | 639124 | 467e3f89eeca4108bb8710a2b9e0cf2281ac56d5b0609211a83776d0505eecb5 |
| Noto Sans | Bold Italic | NotoSans-BoldItalic.ttf | 646092 | 1b602a9d6353be42c91df097a4857b69fa2696f26703d7a33b54a15d87c2622c |
| Noto Serif | Regular | NotoSerif-Regular.ttf | 712444 | 19e72cd8d595fae5bd74a5206f5d938512e1183d4fed7abb1ec1be1d7efa5f88 |
| Noto Serif | Bold | NotoSerif-Bold.ttf | 747144 | 96656aa5cec8f1d6fd0e804c1fad397e1a1cfa082e6642124e0bda68cd8363ce |
| Noto Serif | Italic | NotoSerif-Italic.ttf | 756796 | 749e80e313ef711f9373c6cce17c72297ef05490b3dcda7967d1d5d90bf1183f |
| Noto Serif | Bold Italic | NotoSerif-BoldItalic.ttf | 779236 | c710c5b9cf354ae46e7a10472a08019b28220fafeb5887a482a76856f8f6fc0b |
| Noto Sans Condensed | Regular | NotoSans-Condensed.ttf | 617784 | 806816f70ef268abf388acdacf6b2e169f58f70c9f063515eef16a1f256eace6 |
| Noto Sans Condensed | Bold | NotoSans-CondensedBold.ttf | 627132 | d2b9ba877a743185a4123c6a82bf22e8b5c1d79bf7c6227d8f1df1857f71159e |
| Noto Sans Condensed | Italic | NotoSans-CondensedItalic.ttf | 641348 | f9345cb19abfadb61f285795a091ffc60a15e9f2653ed866d1e06678fe571bc7 |
| Noto Sans Condensed | Bold Italic | NotoSans-CondensedBoldItalic.ttf | 646592 | 4f3bcd3ae0a85a1b7fb744a92bcbf0439965d141dac91e5d7ef67db23c5fddf5 |

Trocar um arquivo exige mudar `ARQUIVOS_DE_FONTE`, `frontend/src/css/cartas-fontes.css` e esta tabela juntos. O WOFF2 cortaria o peso pela metade, mas exige reempacotar (fontTools com brotli), e aqui ficou o arquivo oficial, conferível pelo hash.
