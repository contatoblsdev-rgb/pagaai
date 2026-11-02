# PagaAí

Prestação de contas no celular: fotografe as notas, o app lê valor/data/estabelecimento,
acompanha o saldo do adiantamento dia a dia e gera o PDF com total, acerto e todas as notas.

PWA estático (HTML + JS), sem servidor. Os dados ficam no próprio aparelho (IndexedDB).

## Arquivos
- `index.html` — o app inteiro
- `manifest.webmanifest` — nome, ícone e cores para instalar na tela inicial
- `sw.js` — service worker (abre offline)
- `icon-*.png`, `apple-touch-icon.png` — ícones

## Publicar (Cloudflare Pages, grátis)
1. Crie o repositório `PagaAi` no GitHub e suba estes arquivos na raiz.
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → escolha o repositório.
3. Framework preset: **None**. Build command: vazio. Output directory: `/`.
4. Deploy. O app fica em `https://pagaai.pages.dev` (ou no domínio que você apontar).

## Instalar no celular
- iPhone (Safari): Compartilhar → **Adicionar à Tela de Início**.
- Android (Chrome): menu ⋮ → **Instalar app**.

## Leitura automática das notas
Em **Ajustes**, cole uma chave da API do Claude (console.anthropic.com → API Keys).
A chave fica só no aparelho e é enviada direto para a API da Anthropic. Uso pessoal: não
distribua o app com a sua chave dentro. Cada nota custa frações de centavo com o Haiku.

## Atualizar
Edite e faça push. Ao mudar arquivos além do `index.html`, troque `VERSION` em `sw.js`
(ex.: `pagaai-v2`) para os celulares baixarem a versão nova.

## Atenção
Os dados ficam só no aparelho. Apagar dados do navegador ou desinstalar o app apaga as
prestações. Gere o PDF de cada prestação finalizada.
