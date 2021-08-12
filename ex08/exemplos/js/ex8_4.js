function incluirAposta() {
  var inputNome = document.getElementById("inputNome");
  var inputPeso = document.getElementById("inputPeso");

  var nome = inputNome.value;
  var peso = inputPeso.value;

  if (nome == "" || peso < 0 || isNaN(peso)) {
    alert("Informe os dados");
    inputNome.focus();
    return;
  }

  if (verApostaExiste(peso)) {
    alert("Alguém já apostou esse peso.");
    inputPeso.focus();
    return;
  }

  if (localStorage.getItem("melanciaNome")) {
    var melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
    var melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;

    localStorage.setItem("melanciaNome", melanciaNome);
    localStorage.setItem("melanciaPeso", melanciaPeso);
  } else {
    localStorage.setItem("melanciaNome", nome);
    localStorage.setItem("melanciaPeso", peso);
  }

  mostrarAposta();

  inputNome.value = "";
  inputPeso.value = "";

  inputNome.focus();
}

var btnApostar = document.getElementById("btnApostar");
btnApostar.addEventListener("click", incluirAposta);

function verApostaExiste(peso) {
  var existe = false;

  if (localStorage.getItem("melanciaPeso")) {
    var pesos = localStorage.getItem("melanciaPeso").split(";");

    if (pesos.indexOf(peso.toString()) >= 0) {
      existe = true;
    }
  }

  return existe;
}

function mostrarAposta(){
    var outApostas = document.getElementById("outApostas");

    if(!localStorage.getItem("melanciaNome")){
        outApostas.textContent = "";
        return;
    }

    var nomes = localStorage.getItem("melanciaNome").split(";");
    var pesos = localStorage.getItem("melanciaPeso").split(";");

    var linhas = "";

    for(var i = 0; i < nomes.length; i++){
        linhas += nomes[i] + " - " + pesos[i] + "gr \n";
    }

    outApostas.textContent = linhas;
}

mostrarAposta();

function verificaVencedor(){

    if(!localStorage.getItem("melanciaNome")){
        alert("Não há apostar cadastradas");
        return;
    }

    var pesoCorreto = Number(prompt("Qual o peso correto da melância?"));

    if(pesoCorreto == 0 || isNaN(pesoCorreto)){
        return;
    }

    var nomes = localStorage.getItem("melanciaNome").split(";");
    var pesos = localStorage.getItem("melanciaPeso").split(";");

    var vencedorNome = nomes[0];
    var vencedorPeso = Number(pesos[0]);

    for(var i = 1; i < nomes.length; i++){

        difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

        if(difAposta < difVencedor){
            vencedorNome = nomes[i];
            vencedorPeso = Number(pesos[i]);
        }
    }
    var mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr";
    mensagem += "\n-----------------------------------------------";
    mensagem += "\nVencedor: " + vencedorNome;
    mensagem += "\nApostar: " + vencedorPeso + "gr";
    alert(mensagem);
}

var btnVencedor = document.getElementById("btnVencedor");
btnVencedor.addEventListener("click", verificaVencedor);

function limpaAposta(){
    if(confirm("Confirmar exclusão de todas as apostas?")){
        localStorage.removeItem("melanciaNome");
        localStorage.removeItem("melanciaPeso");
        mostrarAposta();
    }
}

var btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener("click", limpaAposta);