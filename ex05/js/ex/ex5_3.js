var carros = [];

function addCarros() {
  var inputModelo = document.getElementById("inputModelo");
  var inputPreco = document.getElementById("inputPreco");

  var vmodelo = inputModelo.value;
  var vpreco = Number(inputPreco.value);

  if (vmodelo == "" || isNaN(vpreco) || vpreco == 0) {
    alert("Dados inválidos");
    inputModelo.focus();
    return;
  }

  carros.push({ modelo: vmodelo, preco: vpreco });

  inputModelo.value = "";
  inputPreco.value = "";

  inputModelo.focus();

  listarCarros();
}

var btnAdd = document.getElementById("btnAdiciona");
btnAdd.addEventListener("click", addCarros);

function listarCarros() {
  if (carros.length == 0) {
    alert("Não há carros inseridos");
    return;
  }

  var lista = "";

  for (var i = 0; i < carros.length; i++) {
    lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
  }

  document.getElementById("outLista").textContent = lista;
}

var btnLista = document.getElementById("btnListar");
btnLista.addEventListener("click", listarCarros);

function filtrarCarros() {
  var maximo = Number(
    prompt("Qual o valor máximo que o cliente deseja pagar?")
  );

  if (maximo == 0 || isNaN(maximo)) {
    return;
  }

  var lista = [];

  for (var i = 0; i < carros.length; i++) {
    if (carros[i].preco <= maximo) {
      lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
    }
  }

  var outLista = document.getElementById("outLista");

  if (lista == "") {
    outLista.textContent = "Não há carros no valor de R$" + maximo.toFixed(2);
  } else {
    outLista.textContent =
      "Carros até R$ " +
      maximo.toFixed(2) +
      "\n ------------------------------\n" +
      lista;
  }
}

var btnFiltrar = document.getElementById("btnFiltrar");
btnFiltrar.addEventListener("click", filtrarCarros);
