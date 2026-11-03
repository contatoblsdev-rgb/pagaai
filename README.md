# PagaAí

Prestação de contas no celular: fotografe as notas, o app lê total, data, pagamentos,
gorjeta e bebidas alcoólicas, acompanha o saldo do adiantamento e gera o PDF com todas as notas.

Sem login: os dados ficam no próprio aparelho. Leitura das notas grátis, no celular, sem internet.

## Android (APK)
Cada atualização no `main` gera um APK novo em **Releases** (`PagaAi-1.0.N.apk`).
No celular: abra a release mais recente, baixe o `.apk` e toque para instalar
(na 1ª vez o Android pede para permitir instalar apps desta fonte).
Versões novas instalam por cima e mantêm as prestações.

Configuração única: **Settings → Secrets and variables → Actions → New repository secret**,
nome `KEYSTORE_PASSWORD`, valor = a senha da chave de assinatura. Guarde essa senha:
sem ela não dá para gerar atualizações que instalem por cima.

## iPhone / navegador (PWA)
Os arquivos da raiz são o app web. Publicado no Cloudflare Pages (preset None, build vazio,
output `/`). No iPhone: Safari → Compartilhar → Adicionar à Tela de Início.

## Estrutura
- `index.html` — o app inteiro
- `vendor/` — leitor de notas (Tesseract), dados de português e gerador de PDF, embutidos
- `android/` — projeto Android (Capacitor); `npm run sync` copia o app web para dentro dele
- `.github/workflows/android.yml` — compila e publica o APK
- `sw.js`, `manifest.webmanifest`, ícones — instalação como PWA

## Atenção
Os dados ficam só no aparelho. Desinstalar o app ou limpar os dados apaga as prestações.
Gere o PDF de cada prestação finalizada.
