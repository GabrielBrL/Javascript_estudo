var pacientes = [];

function adicionarPacientes(){
    var inputPaciente = document.getElementById("inputPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inputPaciente.value;

    if(nome == ""){
        alert("Informe o nome do paciente!");
        inputPaciente.focus();
        return;
    }

    pacientes.push(nome);

    var lista = "";

    for (i = 0; i < pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;

    inputPaciente.value = "";
    inputPaciente.focus();
}

var btnAdd = document.getElementById("btnAdicionar");
btnAdd.addEventListener("click", adicionarPacientes);