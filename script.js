/**
 * ==============================================================================
 * APLICATIVO DE LISTA DE TAREFAS (TO-DO LIST) - JAVASCRIPT VANILLA
 * ==============================================================================
 * 
 * Novas funcionalidades implementadas:
 * 1. Marcar e desmarcar tarefas como concluídas com Checkbox e clique no texto.
 * 2. Modo Escuro (Dark Mode) com alternância de tema e persistência no localStorage.
 */

/* ------------------------------------------------------------------------------
   1. SELEÇÃO DE ELEMENTOS DO DOM
   ------------------------------------------------------------------------------
   Buscamos os elementos HTML pelos seus IDs para podermos manipulá-los.
*/
const formTarefa = document.getElementById('form-tarefa');
const inputTarefa = document.getElementById('input-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const mensagemVazia = document.getElementById('mensagem-vazia');
const contadorTarefas = document.getElementById('contador-tarefas');

// Novos elementos para o Modo Escuro
const btnTema = document.getElementById('btn-tema');
const iconeTema = document.getElementById('icone-tema');


/* ------------------------------------------------------------------------------
   2. FUNCIONALIDADE: MODO ESCURO (DARK MODE)
   ------------------------------------------------------------------------------
   Alterna a classe 'dark-mode' no elemento <body> da página.
   Como o CSS está preparado com variáveis (body.dark-mode), todas as cores
   mudam automaticamente quando a classe é adicionada ou removida.
*/

// Função que atualiza o ícone (sol ou lua) baseado no tema atual
function atualizarIconeTema(isDarkMode) {
    iconeTema.textContent = isDarkMode ? '☀️' : '🌙';
}

// Ouvinte de clique no botão de alternar tema
btnTema.addEventListener('click', function () {
    // classList.toggle() adiciona a classe se ela não existir, ou remove se já existir
    const isDarkMode = document.body.classList.toggle('dark-mode');

    // Atualiza o emoji do botão: Sol (quando escuro) ou Lua (quando claro)
    atualizarIconeTema(isDarkMode);

    // PERSISTÊNCIA: localStorage permite salvar uma informação no navegador do usuário
    // para que a preferência dele seja lembrada mesmo se ele fechar ou recarregar a página!
    localStorage.setItem('tema-preferido', isDarkMode ? 'escuro' : 'claro');
});

// Ao carregar a página, verificamos se o usuário já havia escolhido o tema anteriormente
function carregarTemaSalvo() {
    const temaSalvo = localStorage.getItem('tema-preferido');

    if (temaSalvo === 'escuro') {
        document.body.classList.add('dark-mode');
        atualizarIconeTema(true);
    } else {
        atualizarIconeTema(false);
    }
}


/* ------------------------------------------------------------------------------
   3. FUNÇÃO: ATUALIZAR INTERFACE (Contador e Mensagem de Vazio)
   ------------------------------------------------------------------------------
   Verifica o total de tarefas e quantas já foram marcadas como concluídas.
*/
function atualizarInterface() {
    // Busca todos os <li> da lista
    const itens = listaTarefas.querySelectorAll('.task-item');
    const totalTarefas = itens.length;

    // Busca apenas os <li> que possuem a classe .completed
    const concluidas = listaTarefas.querySelectorAll('.task-item.completed').length;

    // Atualiza o texto do contador no rodapé
    if (totalTarefas === 0) {
        contadorTarefas.textContent = '0 tarefas';
    } else if (concluidas > 0) {
        contadorTarefas.textContent = `${totalTarefas} ${totalTarefas === 1 ? 'tarefa' : 'tarefas'} (${concluidas} concluída${concluidas > 1 ? 's' : ''})`;
    } else {
        contadorTarefas.textContent = `${totalTarefas} ${totalTarefas === 1 ? 'tarefa' : 'tarefas'}`;
    }

    // Exibe ou oculta a mensagem de lista vazia
    if (totalTarefas === 0) {
        mensagemVazia.classList.remove('hidden');
    } else {
        mensagemVazia.classList.add('hidden');
    }
}


/* ------------------------------------------------------------------------------
   4. FUNÇÃO: ALTERNAR STATUS DE UMA TAREFA (Concluir / Desconcluir)
   ------------------------------------------------------------------------------
   Esta função centraliza a lógica de conclusão:
   - Adiciona ou remove a classe CSS 'completed' do <li>.
   - Sincroniza o estado do checkbox (marcado ou desmarcado).
   - Atualiza o contador de tarefas concluídas no rodapé.
*/
function alternarConclusaoTarefa(itemLi, checkbox) {
    // Alterna a classe 'completed' no elemento <li>
    itemLi.classList.toggle('completed');

    // Sincroniza o checkbox com o estado da classe (se tem .completed, fica marcado)
    checkbox.checked = itemLi.classList.contains('completed');

    // Atualiza os contadores na tela
    atualizarInterface();
}


/* ------------------------------------------------------------------------------
   5. FUNÇÃO: CRIAR ELEMENTO DE TAREFA
   ------------------------------------------------------------------------------
   Cria dinamicamente a estrutura completa de cada item:
   
   <li class="task-item">
       <input type="checkbox" class="task-checkbox">
       <span class="task-text">Nome da tarefa</span>
       <button class="btn-remover">✕</button>
   </li>
*/
function criarItemTarefa(texto) {
    // 1. Cria o elemento contêiner <li>
    const itemLi = document.createElement('li');
    itemLi.className = 'task-item';

    // 2. Cria o Checkbox para marcar/desmarcar a conclusão
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.setAttribute('aria-label', 'Marcar tarefa como concluída');

    // Evento quando o usuário clica diretamente no checkbox
    checkbox.addEventListener('change', function () {
        alternarConclusaoTarefa(itemLi, checkbox);
    });

    // 3. Cria o elemento <span> com o texto da tarefa
    const spanTexto = document.createElement('span');
    spanTexto.className = 'task-text';
    spanTexto.textContent = texto;

    // Também permitimos marcar/desmarcar clicando no próprio texto da tarefa
    spanTexto.addEventListener('click', function () {
        alternarConclusaoTarefa(itemLi, checkbox);
    });

    // 4. Cria o botão de exclusão
    const botaoRemover = document.createElement('button');
    botaoRemover.className = 'btn-remover';
    botaoRemover.innerHTML = '&times;'; // Símbolo "×"
    botaoRemover.setAttribute('aria-label', 'Remover tarefa');
    botaoRemover.setAttribute('title', 'Remover tarefa');

    // Evento de clique no botão de exclusão
    botaoRemover.addEventListener('click', function () {
        itemLi.remove();       // Remove o elemento da tela
        atualizarInterface();  // Recalcula o total de tarefas
    });

    // 5. Monta a estrutura anexando os elementos filhos ao <li>
    itemLi.appendChild(checkbox);
    itemLi.appendChild(spanTexto);
    itemLi.appendChild(botaoRemover);

    return itemLi;
}


/* ------------------------------------------------------------------------------
   6. FUNÇÃO: ADICIONAR NOVA TAREFA
   ------------------------------------------------------------------------------
*/
function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    // Validação: não permite tarefas vazias
    if (textoTarefa === '') {
        inputTarefa.focus();
        return;
    }

    // Cria o novo elemento e insere na lista
    const novoItem = criarItemTarefa(textoTarefa);
    listaTarefas.appendChild(novoItem);

    // Limpa o input e devolve o cursor para ele
    inputTarefa.value = '';
    inputTarefa.focus();

    // Atualiza o estado da tela
    atualizarInterface();
}


/* ------------------------------------------------------------------------------
   7. OUVINTES DE EVENTOS (EVENT LISTENERS)
   ------------------------------------------------------------------------------
*/
// Escuta o envio do formulário (clique em Adicionar ou tecla Enter)
formTarefa.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Impede o recarregamento padrão da página
    adicionarTarefa();
});


/* ------------------------------------------------------------------------------
   8. INICIALIZAÇÃO DA APLICAÇÃO
   ------------------------------------------------------------------------------
*/
// Aplica o tema salvo (claro ou escuro) e atualiza os contadores iniciais
carregarTemaSalvo();
atualizarInterface();
