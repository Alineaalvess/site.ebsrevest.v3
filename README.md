# EBS REVEST — Site institucional

Site institucional da EBS REVEST (revestimento de cilindros para máquinas offset e indústrias).
Feito com React 19, TypeScript e Vite. Estilos com Tailwind CSS (via CDN) e ícones Font Awesome.

## Requisitos

- Node.js 18 ou superior

## Como rodar

```bash
npm install
npm run dev        # ambiente de desenvolvimento em http://localhost:3000
npm run build      # gera a pasta dist/ pronta para hospedagem
npm run preview    # testa o build localmente
```

## Estrutura

```
public/assets/        imagens, vídeo e trilha sonora (servidos como estão)
src/
  components/         componentes de interface (Navbar, Hero, Products, ...)
  data/site.ts        textos, produtos, contatos e links (edite aqui)
  styles/index.css    estilos globais
  types/              tipos TypeScript
  utils/whatsapp.ts   gerador de links do WhatsApp
  App.tsx, main.tsx   composição da página e ponto de entrada
```

## Como editar o conteúdo

- **Telefone, e-mail, endereço, redes sociais, produtos e textos de “Quem Somos”:** `src/data/site.ts`.
- **Novas fotos:** coloque em `public/assets/images/` (de preferência em `.webp`) e referencie em `src/data/site.ts`.

## Hospedagem

Envie o **conteúdo** da pasta `dist/` (gerada por `npm run build`) para a raiz do domínio
(por exemplo `public_html`). Os caminhos dos arquivos são absolutos (`/assets/...`), então o site
deve ficar na raiz do domínio, e não em uma subpasta.
