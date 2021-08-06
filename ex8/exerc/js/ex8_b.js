function adicionaProduto() {
  var inputProduto = document.getElementById("inputProduto");

  var produto = inputProduto.value;

  if (produto == "") {
    alert("Digite o nome do produto");
    inputProduto.focus();
    return;
  }

  if (localStorage.getItem("produtos")) {
    var produtoNome = localStorage.getItem("produtos") + ";" + produto;
    localStorage.setItem("produtos", produtoNome);
  } else {
    localStorage.setItem("produtos", produto);
  }

  mostraProdutos();

}

var btnAdicionar = document.getElementById("btnAdicionar");
btnAdicionar.addEventListener("click", adicionaProduto);

inputProduto.addEventListener("keypress", function (tecla){
    if(tecla.keyCode == 13){
        adicionaProduto();
    }
});

function mostraProdutos() {
  var outProdutos = document.getElementById("outCompras");
  if (!localStorage.getItem("produtos")) {
    outProdutos.textContent = "";
    inputProduto.value = "";
    inputProduto.focus();
    return;
  }

  var produtos = localStorage.getItem("produtos").split(";");

  var lista_prod = produtos.slice();
  
  lista_prod.sort();


  var mensagem = "PRODUTOS ADICIONADOS";
  mensagem += "\n____________________";
  for (var i = 0; i < lista_prod.length; i++) {
    mensagem += "\n" + lista_prod[i];
  }

  outProdutos.textContent = mensagem;

  inputProduto.value = "";
  inputProduto.focus();
}

mostraProdutos();

function limparDados() {
  if (confirm("Deseja remover os produtos?")) {
    localStorage.removeItem("produtos");
    mostraProdutos();
  }
}

var btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener("click", limparDados);
