const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('listing');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = "";
    inputTarefa.focus();
}

function criaBotaoApaga(li) {
    li.innerText += ' ';
    const botaoApaga = document.createElement('button');
    botaoApaga.innerText = 'Apagar'
    botaoApaga.setAttribute('class', 'apagar');
    botaoApaga.setAttribute('title', 'Apagar essa tarefa')
    li.appendChild(botaoApaga);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApaga(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (const tarefa of liTarefas) {
        let tarefaTexto = tarefaTexto.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

    function adcionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa);
            listaDeTarefas++;
        }
    }
    adcionaTarefasSalvas();
}