const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

var apostas = [];

function adicionarAposta() {
  var inputValor = document.getElementById("inputValor");
  var outApostas = document.getElementById("outApostas");

  var cavalo = Number(inputCavalo.value);
  var valor = Number(inputValor.value);

  if (isNaN(cavalo) || isNaN(valor) || valor == 0 || !validarCavalo(cavalo)) {
    alert("Aposta inválida");
    inputCavalo.focus();
    return;
  }

  apostas.push({ cavalo: cavalo, valor: valor });

  var lista = "Apostas Realizadas\n--------------------------\n";

  for (var i = 0; i < apostas.length; i++) {
    lista += "Nº " + apostas[i].cavalo + " " + obterCavalo(apostas[i].cavalo);
    lista += " - R$: " + apostas[i].valor.toFixed(2) + "\n";
  }

  outApostas.textContent = lista;

  inputCavalo.value = "";
  inputValor.value = "";
  inputCavalo.focus();
}

var btnApostar = document.getElementById("btnApostar");
btnApostar.addEventListener("click", adicionarAposta);

function validarCavalo(num) {
  var tam = CAVALOS.length;

  if (num >= 1 && num <= tam) {
    return true;
  } else {
    return false;
  }
}

function mostrarCavalo() {
  var outCavalo = document.getElementById("outCavalo");

  if (inputCavalo.value == "") {
    outCavalo.textContent = "";
    return;
  }

  var cavalo = Number(inputCavalo.value);

  if (isNaN(cavalo) || !validarCavalo(cavalo)) {
    outCavalo.textContent = "Número do cavalo inválido";
    return;
  }

  var nomeCavalo = obterCavalo(cavalo);
  var numApostas = contarApostas(cavalo);
  var total = totalizarApostas(cavalo);

  outCavalo.textContent = nomeCavalo + "(Apostas: " + numApostas;
  outCavalo.textContent += " - R$: " + total.toFixed(2) + ")";
}

var inputCavalo = document.getElementById("inputCavalo");
inputCavalo.addEventListener("blur", mostrarCavalo);

function obterCavalo(num) {
  var posicao = num - 1;
  return CAVALOS[posicao];
}

function contarApostas(numCavalo) {
  var contador = 0;

  for (var i = 0; i < apostas.length; i++) {
    if (apostas[i].cavalo == numCavalo) {
      contador++;
    }
  }
  return contador;
}

function totalizarApostas(numCavalo) {
  var total = 0;
  for (var i = 0; i < apostas.length; i++) {
    if (apostas[i].cavalo == numCavalo) {
      total = total + apostas[i].valor;
    }
  }
  return total;
}

inputCavalo.addEventListener("focus", function () {
  inputCavalo.value = "";
  document.getElementById("outCavalo").textContent = "";
});

function ganhadorPareo(){
    var ganhador = Number(prompt("Nº cavalo ganhador: "));

    if(isNaN(ganhador) || !validarCavalo(ganhador)){
        alert("Cavalo inválido");
        return;
    }

    var outApostas = document.getElementById("outApostas");

    var resumo = "Resultado final do páreo\n";
    resumo += "Nº total de apostas: "+apostas.length+"\n";
    resumo += "Total geral R$: "+totalizarApostas().toFixed(2)+"\n\n";
    resumo += "Ganhador Nº "+ganhador+" - "+obterCavalo(ganhador)+"\n";
    resumo += "----------------------------------------\n";
    resumo += "Nº de apostas: "+contarApostas(ganhador)+"\n";
    resumo += "Total apostado R$: "+totalizarApostas(ganhador).toFixed(2);

    outApostas.textContent = resumo;

    btnApostar.disabled = true;
    btnGanhador.disabled = true;
    btnNovo.focus();
}

var btnGanhador = document.getElementById("btnGanhador");
btnGanhador.addEventListener("click", ganhadorPareo);

function totalizarApostas(){
    var total = 0;

    for(var i = 0; i < apostas.length; i++){
        total = total + apostas[i].valor;
    }

    return total;
}

var btnNovo = document.getElementById("btnNovo");
btnNovo.addEventListener("click", function (){
    location.reload();
});
