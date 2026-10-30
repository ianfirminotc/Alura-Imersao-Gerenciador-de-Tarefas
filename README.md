# 📝 Lista de Tarefas Minimalista (To-Do List)

Aplicação de **Lista de Tarefas (To-Do List)** com design moderno, limpo e minimalista, desenvolvida com tecnologias fundamentais da web: **HTML5, CSS3 e JavaScript puro (Vanilla JS)**, sem necessidade de frameworks ou bibliotecas externas.

O projeto conta com suporte a **Modo Escuro (Dark Mode)** com persistência no navegador, diferenciação visual completa de tarefas concluídas, contador dinâmico e validações de uso.

---

## 🚀 Funcionalidades

- **Design Minimalista e Moderno:** Interface centrada, espaçamento generoso, cantos suaves (`border-radius: 20px`), tipografia limpa (**Inter**) e sombras sutis.
- **Adicionar Tarefas:**
  - Inclusão rápida através do campo de texto.
  - Suporte a envio tanto pelo botão **Adicionar** quanto pela tecla `Enter`.
  - Validação inteligente contra tarefas vazias ou compostas apenas de espaços em branco.
  - Foco automático no campo após a inserção para digitação contínua.
- **Concluir e Desmarcar Tarefas:**
  - Checkbox moderno e estilizado com cantos suaves e indicador `✓`.
  - Suporte a alternância de conclusão clicando no **checkbox** ou diretamente no **texto da tarefa**.
  - **Diferenciação visual elegante:** texto tachado (`line-through`), opacidade reduzida (`0.6`) e cor cinza suavizada.
- **Remover Tarefas:**
  - Botão de exclusão (`×`) em cada item com destaque e feedback visual ao passar o mouse.
- **Modo Escuro (Dark Mode):**
  - Alternância rápida com botão minimalista no topo da aplicação.
  - Transição de cores fluida e harmoniosa.
  - Persistência automática no `localStorage` (o navegador memoriza o seu tema preferido).
- **Contador Dinâmico e Estado Vazio:**
  - Exibe o total de tarefas cadastradas e o progresso de itens concluídos no rodapé.
  - Mensagem amigável de estado vazio quando não há tarefas na lista.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Marcação semântica, acessível e estruturada (`<main>`, `<header>`, `<form>`, `<input>`, `<ul>`, `<footer>`).
- **CSS3:** Variáveis de design (`:root` e `body.dark-mode`), Flexbox para layout responsivo, animações sutis (`@keyframes fadeIn`) e reset padronizado.
- **JavaScript (ES6+ Vanilla):** Manipulação dinâmica do DOM (`document.getElementById`, `createElement`, `appendChild`, `remove`), ouvintes de eventos (`addEventListener`) e persistência local com `localStorage`.

---

## 📁 Estrutura de Arquivos

```text
todo-list/
├── index.html        # Estrutura semântica e acessível da interface
├── style.css         # Estilização completa, variáveis de tema (Claro/Escuro) e animações
├── script.js         # Lógica de adicionar, concluir, remover e alternar temas
└── README.md         # Documentação completa do projeto
```

---

## 💻 Como Executar na Máquina Local

Por ser construído com tecnologias web nativas, **você não precisa instalar nada** (nenhum servidor, nem Node.js, nem Python).

1. Baixe ou clone o repositório no seu computador:
   ```bash
   git clone https://github.com/ianfirminotc/antigravity-alura.git
   ```
2. Abra a pasta `todo-list`.
3. Dê um duplo clique no arquivo [index.html](index.html) para abrir a aplicação diretamente no seu navegador padrão (Chrome, Edge, Firefox, Opera, Safari, etc.).

---

## 🧪 Testes Automatizados e Validação

A aplicação foi validada através de uma suíte completa de **31 testes automatizados** em navegador Google Chrome headless, verificando:

- [x] Renderização da tela inicial e mensagem de estado vazio.
- [x] Adição de tarefas via clique no botão e via tecla `Enter`.
- [x] Limpeza e devolução de foco ao campo de digitação.
- [x] Bloqueio contra tarefas em branco ou vazias.
- [x] Marcação e desmarcação com o estilo visual correto (`line-through`, opacidade `0.6` e cor suavizada).
- [x] Atualização dinâmica do contador de tarefas concluídas.
- [x] Remoção individual e restauração automática do estado vazio.
- [x] Alternância entre Modo Claro e Modo Escuro com salvamento no `localStorage`.
- [x] Ausência total de erros no console do navegador (`0 errors`).

---

## ⌨️ Interações e Atalhos Suportados

| Ação | Como Utilizar |
| :--- | :--- |
| **Adicionar tarefa** | Digitar no campo e pressionar `Enter` ou clicar em `Adicionar` |
| **Concluir / Reabrir tarefa** | Clicar no **checkbox** ou diretamente no **texto da tarefa** |
| **Excluir tarefa** | Clicar no botão `×` localizado à direita de cada item |
| **Alternar Modo Escuro** | Clicar no botão circular de tema (`🌙` / `☀️`) no canto superior direito |

---

## 👤 Autor

Desenvolvido por **Ian Firmino**  
GitHub: [@ianfirminotc](https://github.com/ianfirminotc)
