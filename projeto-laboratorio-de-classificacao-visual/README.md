# 🔍 Laboratório de Classificação Visual: Viés e Ética em IA

<p align="center">
  <img src="https://img.shields.io/badge/Teachable_Machine-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Teachable Machine" />
  <img src="https://img.shields.io/badge/TensorFlow.js-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow.js" />
  <img src="https://img.shields.io/badge/Machine_Learning-00E5FF?style=for-the-badge&logo=code-igniter&logoColor=white" alt="Machine Learning" />
</p>

## 📝 Descrição do Projeto

Este projeto é um **Laboratório de Classificação Visual** focado na análise de viés em algoritmos de Inteligência Artificial. Utilizando o Teachable Machine, foi treinado um modelo de classificação de imagens com o objetivo de distinguir entre duas categorias estereotipadas: **"Pessoas bem-sucedidas"** (24 imagens em contextos formais) e **"Pessoas comuns"** (24 imagens em contextos informais). 

O foco principal deste estudo de caso empírico é demonstrar, na prática, como uma base de dados limitada e enviesada corrompe a lógica de aprendizado do algoritmo. A documentação inclui um profundo referencial ("Memorial de Impacto e Ética") alertando sobre os danos de reproduzir falsos negativos e reforçar preconceitos estruturais em decisões automatizadas.

---

## 🚀 Tecnologias e Ferramentas Utilizadas

* **Plataforma de Treinamento:** Google Teachable Machine (`@teachablemachine/image` v0.8.4-alpha2)
* **Motor de Inferência:** TensorFlow.js (v1.7.4 / Keras Export)
* **Arquitetura Neurão:** Rede Neural Convolucional (`Sequential`, `DepthwiseConv2D`)
* **Entrada de Dados:** Resolução de entrada customizada (224x224 RGB)
* **Formato de Exportação do Modelo:** Topologia JSON Keras (`model.json`) e Weights Manifest (`weights.bin`)

## 📊 Resultados e Funcionalidades

O projeto evidencia os desafios de visão computacional em relação à ética na Inteligência Artificial:

* **Detecção e Comprovação do Viés:** Durante os testes, uma imagem que não se encaixava aos padrões estereotipados foi submetida, o modelo testado resultou num claro falso negativo: classificada em "Pessoas comuns" (90%) contra apenas (10%) para a classe autêntica "Pessoas bem-sucedidas".
* **Memorial de Impacto e Ética:**
  * **Mecanismo do Viés:** O modelo passou a associar a métrica de "sucesso" unicamente a indicadores visuais muito literais atrelados aos dados fornecidos, ignorando cenários reais.
  * **Consequência Social:** Representação direta de como os algoritmos podem marginalizar e invisibilizar pessoas na sociedade, desvalorizando perfis profissionais e vetando oportunidades.
  * **Ação Mitigadora:** Implementação imperativa do princípio de ***Human-in-the-loop***. Profissionais especialistas devem equilibrar os relatórios de dados antes da implementação assegurando o máximo de diversidade de gênero, contexto e apresentabilidade para um modelo inclusivo e justo.

## 🔧 Como Executar e Testar

O modelo e seus pesos pré-treinados foram exportados publicamente.

1. Acesse a plataforma interativa no link a seguir:
   👉 **[Acessar Modelo Teachable Machine](https://teachablemachine.withgoogle.com/models/FT5Z1cEH_/)**
2. Conceda permissão para WebCam ou clique em "Upload" para subir fotos diferentes.
3. Observe os índices de taxa percentual no painel *Output* e repare em falhas na inferência do estereótipo visado pelo modelo corrompido.
4. Para análise de software e rede neural, o repositório conta com os esquemas JSON de metadados da estrutura construída no modelo.

---
[⬅️ Voltar ao início](https://github.com/profdiegocarvalho/portfolio-arthur-correia-carvalho)
