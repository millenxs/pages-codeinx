
# Landing Page para Agência

Uma landing page moderna e responsiva desenvolvida para uma agência, construída com Vue.js, TypeScript e Tailwind CSS. Este projeto é baseado no design original disponível no Figma.

## 📋 Descrição

Este é um pacote de código para a Landing Page para Agência. O projeto original está disponível em [Figma](https://www.figma.com/design/LiLK5LAN7vaNGh0AEAnnFp/Landing-Page-para-Ag%C3%AAncia).

A landing page inclui seções como Hero, Serviços, Sobre, Recursos de IA, Portfólio, Depoimentos, Contato e Rodapé, projetada para destacar os serviços da agência e converter visitantes em clientes.

## 🚀 Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Ferramenta de build rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide Icons** - Biblioteca de ícones
- **PostCSS** - Ferramenta para processamento de CSS

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/millenxs/pages-codeinx.git
   cd pages-codeinx
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## 🏃‍♂️ Uso

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173` (porta padrão do Vite).

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza a build de produção localmente

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Componentes React (se aplicável)
├── components/             # Componentes Vue
│   ├── ui/                 # Componentes de UI reutilizáveis
│   ├── About.vue           # Seção Sobre
│   ├── AIFeatures.vue      # Recursos de IA
│   ├── Contact.vue         # Contato
│   ├── CTA.vue             # Call to Action
│   ├── Footer.vue          # Rodapé
│   ├── Hero.vue            # Seção Hero
│   ├── Navbar.vue          # Navegação
│   ├── Portfolio.vue       # Portfólio
│   ├── Services.vue        # Serviços
│   └── Testimonials.vue    # Depoimentos
├── styles/                 # Estilos CSS
│   ├── fonts.css
│   ├── index.css
│   ├── tailwind.css
│   └── theme.css
├── App.vue                 # Componente principal
├── main.ts                 # Ponto de entrada
└── vite-env.d.ts           # Tipos do Vite
```

## 🎨 Personalização

- **Cores e Tema**: Modifique `src/styles/theme.css` para ajustar cores e variáveis CSS
- **Componentes**: Os componentes estão organizados em `src/components/` e podem ser facilmente customizados
- **Responsividade**: O design é totalmente responsivo usando Tailwind CSS

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do repositório GitHub.