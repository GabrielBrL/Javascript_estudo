var numeros = [];

var outResposta = document.getElementById("outResposta");

function adicionarNum() {
  var inputNum = document.getElementById("inputNum");

  var num = inputNum.value;
  if (isNaN(num) || num == "") {
    alert("Não é número!");
    return;
  }
  if (numeros.indexOf(num) == -1) {
    numeros.push(num);
  } else {
    alert("Já inserido");
    inputNum.value = "";
    return;
  }
  inputNum.value = "";
  inputNum.focus();
  listarNum();
}

function listarNum() {
  var copia = numeros.slice().join(", ");

  outResposta.textContent = "Números: " + copia;
}

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", adicionarNum);

function verificarNum() {
  var erro = "";
  for (var i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      erro = "Não estão em ordem crescente!\n";
    } else {
      erro = "Estão em ordem crescente!";
    }
  }
  outErros.textContent = erro;

}
var btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", verificarNum);
