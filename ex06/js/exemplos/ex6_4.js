function gerarCracha(){
    var inputNome = document.getElementById("inputNome");
    var outCracha = document.getElementById("outCracha");

    var nome = inputNome.value;

    if(nome == "" || nome.indexOf(" ") == -1){
        alert("Informe o nome completo");
        inputNome.focus();
        return;
    }

    var priEspaco = nome.indexOf(" ");
    var ultEspaco = nome.lastIndexOf(" ");

    var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

    outCracha.textContent = "Crachá: " + cracha;
}

var btnGerar = document.getElementById("btnGerar");
btnGerar.addEventListener("click", gerarCracha);