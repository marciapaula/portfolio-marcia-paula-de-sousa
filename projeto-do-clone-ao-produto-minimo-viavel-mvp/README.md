# 🌉 QR Bridge: Advanced Customizable QR Code Generator

![alt text](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![alt text](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white) ![alt text](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![alt text](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![alt text](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📝 Descrição do Projeto
O **QR Bridge** é uma plataforma avançada e interativa para a criação, personalização e gerenciamento de QR Codes. Com uma interface de usuário moderna e estética polida, o sistema permite ajustar desde as cores e formatos dos pontos (dots) até a inclusão de logotipos customizados e fundos estilizados. 

Desenvolvido para atender tanto necessidades do dia a dia quanto demandas profissionais de branding, o dashboard processa renderizações em tempo real utilizando a robusta biblioteca `qr-code-styling`, garantindo alta definição em downloads e mantendo um histórico em nuvem das suas melhores criações.

![[Dashboard QR Code Bridge](.qr-bridge/img/img-1.png)
Figura 1: Interface principal integrando os painéis de customização e preview em tempo real.

## 🚀 Tecnologias Utilizadas
- **Frontend:** React 19 + TypeScript + Vite
- **Estilização:** Tailwind CSS (Arquitetura Utilitária)
- **Backend & Auth:** Firebase (Google Authentication & Firestore)
- **Motor QR Code:** qr-code-styling (Renderização de alto desempenho em SVG/PNG/JPEG)
- **Gerenciamento de Estado:** Zustand
- **Animações:** Motion (Transitions & Micro-interactions)
- **Internacionalização:** i18next (Suporte multi-idioma)

## 📊 Resultados e Funcionalidades
O projeto foi estruturado para garantir máxima flexibilidade e uma experiência de usuário premium:
- **Visualização Dinâmica:** Preview em tempo real à medida que as configurações visuais do QR Code são alteradas.
- **Personalização Granular:** Possibilidade de modificar padrões (pontos, cantos quadrados/arredondados), customizar gradientes, adicionar logos centrais e alterar proporções.
- **Integração com Nuvem (Histórico):** Salve e recupere predefinições do QR Code integradas de forma segura via contas do Google Authentication.
- **Exportação e Portabilidade:** Gere a configuração em um arquivo JSON exportável ou baixe diretamente as imagens do QR Code com opções dinâmicas.

![alt text](./image/image2.png)

Figura 2: Análise das opções visuais, configurações do gerador e painel de histórico.

## 🔧 Como Executar
1. Clone o repositório.
2. Configure as credenciais do Firebase no arquivo de configuração do projeto ou em um arquivo `.env`.
3. Instale as dependências: `npm install`.
4. Execute o servidor de desenvolvimento: `npm run dev`.

![alt text](./image/image3.png)

Figura 3: Representação da sincronização de histórico e templates salvos na nuvem pelo Firebase Auth.

[Voltar ao início](https://github.com/marciapaula/portfolio-marcia-paula-de-sousa)
