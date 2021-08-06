var clubes = [];

function adicionarClubes() {
  var inputClubes = document.getElementById("inputClube");

  var clube = inputClubes.value;

  if (clube == "") {
    alert("Insira o nome!");
    return;
  }
  clubes.push(clube);

  inputClubes.value = "";
  inputClubes.focus();
  listarClubes();
}

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", adicionarClubes);

function listarClubes() {
  if (clubes.length == 0) {
    alert("Nenhum clube listado");
    return;
  }

  var resultado = "";
  var outLista = document.getElementById("outLista");

  for (var i = 0; i < clubes.length; i++) {
    resultado += i + 1 + ". " + clubes[i] + "\n";
  }

  outLista.textContent = resultado;
}

var btnLista = document.getElementById("btnListar");
btnLista.addEventListener("click", listarClubes);

function Jogos() {
    if(clubes.length % 2 != 0){
        alert("Não é possível montar os jogos!");
        return;
    }
  var copiaReverse = clubes.slice().reverse();
  var copiaNorma = clubes.slice();

  var resultado = "";

  for(var i = 0; i < clubes.length/2; i++){
    resultado += copiaNorma[i] + " X " + copiaReverse[i] + "\n";
  }

  var outLista = document.getElementById("outLista");

  outLista.textContent = resultado;
}

var btnJogos = document.getElementById("btnMontarTabela");
btnJogos.addEventListener("click", Jogos);
