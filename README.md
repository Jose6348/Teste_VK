# VeveFit - Plataforma de Treinos Online

Plataforma web para treinos online focados em barriga negativa e diástase abdominal.

## 🚀 Tecnologias

- Vue.js 3
- TailwindCSS
- Jest
- Cypress
- Sentry
- Google Analytics
- GitHub Actions

## 📋 Pré-requisitos

- Node.js 18+
- npm 8+

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/vevefit.git
cd vevefit
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run serve
```

## 🧪 Testes

### Testes Unitários
```bash
npm run test:unit
```

### Testes End-to-End
```bash
npm run test:e2e
```

### Cobertura de Testes
```bash
npm run test:coverage
```

## 📦 Build

Para criar uma build de produção:
```bash
npm run build
```

## 🔒 Segurança

O projeto implementa várias medidas de segurança:

- Content Security Policy (CSP)
- Proteção contra XSS
- Rate Limiting
- Validação de Input
- CSRF Protection
- Headers de Segurança

## 📊 Analytics e Monitoramento

- Google Analytics para rastreamento de eventos
- Sentry para monitoramento de erros
- Performance monitoring
- Heatmaps

## 🎨 Componentes

### Componentes Comuns
- `OptimizedImage.vue`: Componente de imagem otimizado com lazy loading
- `SeoManager.vue`: Gerenciador de meta tags e SEO
- `Notification.vue`: Sistema de notificações

### Componentes de Página
- `Header.vue`: Cabeçalho da página
- `QuemEVeveFit.vue`: Seção sobre a Veve
- `TreinosDiarios.vue`: Seção de treinos
- `Galeria.vue`: Galeria de transformações
- `Planos.vue`: Seção de planos
- `InformativoBarriga.vue`: Informações sobre barriga negativa

## 📝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **VeveFit** - *Trabalho Inicial* - [VeveFit](https://github.com/vevefit)

## 🙏 Agradecimentos

- [Vue.js](https://vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
