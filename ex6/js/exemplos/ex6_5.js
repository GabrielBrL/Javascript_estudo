function gerarEmail(){
    var inputNome = document.getElementById("inputFunc");
    var outEmail = document.getElementById("outEmail");

    var funcionario = inputNome.value;

    if(funcionario == "" || funcionario.indexOf(" ") == -1){
        alert("Erro!");
        inputNome.focus();
        return;
    }

    var partes = funcionario.split(" ");
    var email = "";
    var tam = partes.length;

    for(var i = 0; i < tam - 1; i++){
        email += partes[i].charAt(0);
    }

    email += partes[tam - 1] + "@empresa.com.br";

    outEmail.textContent = "Email: " + email.toLowerCase();
}

var btnGerar = document.getElementById("btnGerar");
btnGerar.addEventListener("click", gerarEmail);