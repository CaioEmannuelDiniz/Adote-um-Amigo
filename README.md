# 💖 Adote um Amigo

## 🌟 Visão Geral do Projeto

O projeto **Adote um Amigo** é uma **Single Page Application (SPA)** construída com **React.js** e estilizada com **Tailwind CSS**. O objetivo principal é simular uma plataforma simples e interativa para a visualização e o início do processo de adoção de animais de estimação.

A aplicação utiliza um sistema de **roteamento baseado em estado** para navegar de forma fluida entre a lista de animais disponíveis, a página de detalhes e o formulário de adoção, que se integra diretamente com o WhatsApp.

---

## 🚀 Funcionalidades Principais

| Ícone | Funcionalidade | Descrição |
| :---: | :--- | :--- |
| 🏡 | **Listagem de Animais (Home View)** | Exibe cards dos animais disponíveis com nome, idade e espécie. |
| 🔍 | **Visualização Detalhada (Detail View)** | Ao clicar em "Ver mais", o usuário é levado a uma página dedicada com informações completas e foto maior do animal. |
| 📝 | **Formulário de Adoção (Form View)** | Acessado a partir da página de detalhes. O formulário captura dados do interessado. |
| 📱 | **Integração com WhatsApp** | Após preencher e submeter o formulário, a aplicação constrói um link da API do WhatsApp com todos os dados formatados (nome, email, motivo, animal) e abre uma nova janela para o envio da mensagem. |
| ✅ | **Pluralização Dinâmica** | O texto de idade do animal na view de formulário se ajusta automaticamente ("1 ano" vs. "2 anos"). |

---

## 💻 Tecnologias Utilizadas

* **Linguagem:** JavaScript (ES6+)
* **Framework/Biblioteca:** **React (via CDN)**
    * Utilização do hook `useState` para gerenciamento de estado e roteamento.
* **Estilização:** **Tailwind CSS (via CDN)**
    * Utilizado para criar um design responsivo e moderno sem a necessidade de folhas de estilo externas.
* **Integração:** **WhatsApp URL API**
    * Usada para pré-preencher e enviar os dados do formulário através do aplicativo de mensagens.

---

## ⚙️ Estrutura e Roteamento (State-Based Routing)

O componente principal (`App.js`) gerencia a navegação através de dois estados chave:

* **`view`**: Controla qual das três telas principais está ativa:
    * `'list'` (Padrão: Cards dos animais)
    * `'detail'` (DetailView do animal selecionado)
    * `'form'` (AdoptionFormView para preenchimento)
* **`animalSelecionado`**: Objeto que armazena os dados do animal atualmente visualizado, garantindo que as telas `detail` e `form` saibam qual animal está em foco.

### Fluxo de Navegação:

$$\text{Cards} \xrightarrow{\text{abrirModal(animal)}} \text{DetailView} \xrightarrow{\text{abrirFormulario()}} \text{AdoptionFormView} \xrightarrow{\text{voltarHome()}} \text{Cards}$$

---

## 🛠️ Como Executar o Projeto Localmente

Este projeto foi desenvolvido para ser executado diretamente em um navegador, utilizando o React e Tailwind via CDN.

1.  Crie um arquivo `index.html` no diretório raiz do seu projeto.
2.  Inclua os **CDNs** de React, ReactDOM, Babel e Tailwind CSS.
3.  Adicione a estrutura básica do projeto (a tag `<div id="root"></div>`).
4.  Copie e cole o código JavaScript completo (incluindo `dadosAnimais` e todos os componentes, finalizando com `ReactDOM.render(<App />, document.getElementById('root'));`) dentro de uma tag `<script type="text/babel">` no seu HTML.
5.  **Substitua o número de telefone** na constante `WHATSAPP_NUMBER` dentro do componente `AdoptionFormView` pelo número de destino desejado.

Ao abrir o `index.html` no seu navegador, a aplicação estará pronta para uso.