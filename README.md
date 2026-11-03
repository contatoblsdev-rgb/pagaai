# PagaAí

Prestação de contas no celular: fotografe as notas, o app lê total, data, pagamentos,
gorjeta e bebidas alcoólicas, acompanha o saldo do adiantamento e gera o PDF com todas as notas.

PWA estático, sem login: os dados ficam no próprio aparelho (IndexedDB). Leitura das notas grátis, no celular.

## Arquivos
- `index.html` — o app inteiro
- `manifest.webmanifest`, `sw.js`, ícones — instalação como app

## 1. Publicar (Cloudflare Pages)
Repositório no GitHub com estes arquivos na raiz → Cloudflare → Workers & Pages → Create →
Pages → Import Git → preset **None**, build vazio, output `/`.

## 2. Instalar
iPhone (Safari): Compartilhar → Adicionar à Tela de Início. Android (Chrome): ⋮ → Instalar app.

## Leitura das notas
- **No celular (padrão, grátis):** na 1ª nota baixa o leitor (~5 MB) e depois funciona offline.
  Fotografe de perto, reto, com a nota inteira e boa luz.
- **Claude (opcional, pago):** em Ajustes, para cupons muito apagados.

## Atualizar
Suba os arquivos novos. Ao mudar algo além do `index.html`, troque `VERSION` no `sw.js`.

## Atenção
Os dados ficam só no aparelho. Apagar os dados do navegador ou desinstalar o app apaga as
prestações. Gere o PDF de cada prestação finalizada.
