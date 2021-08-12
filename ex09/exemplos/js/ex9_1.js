function adicionarTarefa(){
    var inputTarefa = document.getElementById("inputTarefa");

    var tarefa = inputTarefa.value;

    if(tarefa == ""){
        alert("Informa a tarefa");
        inputTarefa.focus();
        return;
    }

    var divQuadro = document.getElementById("divQuadro");
    var h5 = document.createElement("h5");
    var texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    divQuadro.appendChild(h5);

    inputTarefa.value = "";
    inputTarefa.focus();
}

var btnAdicionar = document.getElementById("btnAdicionar");
btnAdicionar.addEventListener("click", adicionarTarefa);

function selecionarTarefa(){
    var h5 = document.getElementsByTagName("h5");
    var numH5 = h5.length;

    if(numH5 == 0){
        alert("Não há tarefas para selecionar");
        return;
    }

    var aux = -1;

    for(var i = 0; i < numH5; i++){
        if(h5[i].className == "tarefaSelecionada"){
            h5[i].className = "tarefaNormal";
            aux = i;
            break
        }
    }

    if(aux == numH5 - 1){
        aux = -1;
    }

    h5[aux + 1].className = "tarefaSelecionada";
}

var btnSelecionar = document.getElementById("btnSelecionar");
btnSelecionar.addEventListener("click", selecionarTarefa);

function retirarSelecionado(){
    var divQuadro = document.getElementById("divQuadro");
    var h5 = document.getElementsByTagName("h5");
    var numH5 = h5.length;

    var aux = -1;

    for(var i = 0; i < numH5; i++){
        if(h5[i].className == "tarefaSelecionada"){
            aux = i;
            break;
        }
    }

    if(aux == - 1){
        alert("Selecione uma tarefa para removê-la");
        return;
    }

    if(confirm("Confirmar Exclusão de '" + h5[aux].textContent + "'?")){
        divQuadro.removeChild(h5[aux]);
    }
}

var btnRetirar = document.getElementById("btnRetirar");
btnRetirar.addEventListener("click", retirarSelecionado);

function gravarTarefa(){
    var h5 = document.getElementsByTagName("h5");
    var numH5 = h5.length;

    if(numH5 == 0){
        alert("Não há tarefas para serem gravadas!");
        return;
    }

    var tarefas = "";

    for(var i = 0; i < numH5; i++){
        tarefas += h5[i].textContent + ";";
    }
    localStorage.setItem("tarefas", tarefas.substr(0, tarefas.length - 1));

    if(localStorage.getItem("tarefas")){
        alert("OK! Tarefas gravadas.");
    }
}

var btnGravar = document.getElementById("btnGravar");
btnGravar.addEventListener("click", gravarTarefa);

function recuperarTarefas(){
    if(localStorage.getItem("tarefas")){
        var tarefas = localStorage.getItem("tarefas").split(";");

        var divQuadro = document.getElementById("divQuadro");

        for(var i = 0; i < tarefas.length; i++){
            var h5 = document.createElement("h5");
            var texto = document.createTextNode(tarefas[i]);
            h5.appendChild(texto);
            divQuadro.appendChild(h5);
        }
    }
}

recuperarTarefas()