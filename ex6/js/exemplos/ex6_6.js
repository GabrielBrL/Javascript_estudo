function validaSenha() {
  var inputSenha = document.getElementById("inputSenha");
  var outResposta = document.getElementById("outResposta");

  var senha = inputSenha.value;
  var erros = [];

  if (senha.length < 8 || senha.length > 15) {
    erros.push("Número de caracter inválidos, entre 8 e 15 caracteres");
    inputSenha.focus();
  }
  if (senha.match(/[0-9]/g) == null) {
    erros.push("Deve possuir no mínimo 1 número");
    inputSenha.focus();
  }
  if (!senha.match(/[a-z]/g)) {
    erros.push("Deve possuir no mínimo 1 letra minúscula");
    inputSenha.focus();
  }
  if(senha.match(/[A-Z]/g) < 2){
    erros.push("Deve possuir no mínimo 2 letra maiúscula");
    inputSenha.focus();
  }
  if(!senha.match(/[W|_]/g)){
    erros.push("Deve possuir no mínimo 1 símbolo");
    inputSenha.focus();
  }
  if(erros.length == 0){
      outResposta.textContent = "Senha correta!";
  }
  else{
      outResposta.textContent = "Erros: " + erros.join(", ");
  }
}

var btnValidar = document.getElementById("btnValida");
btnValidar.addEventListener("click", validaSenha);
