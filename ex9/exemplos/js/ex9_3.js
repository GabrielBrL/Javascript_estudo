function adicionarFilme() {
  var inputTitulo = document.getElementById("inputTitulo");
  var inputGenero = document.getElementById("inputGenero");

  var titulo = inputTitulo.value;
  var genero = inputGenero.value;

  if (titulo == "" || genero == "") {
    alert("Há campos faltando.");
    inputTitulo.focus();
    return;
  }

  var tbFilmes = document.getElementById("tbFilmes");

  inserirLinha(tbFilmes, titulo, genero);

  gravarFilme(titulo, genero);

  inputTitulo.value = "";
  inputGenero.value = "";
  inputTitulo.focus();
}
var btnAdicionar = document.getElementById("btnAdicionar");
btnAdicionar.addEventListener("click", adicionarFilme);

function inserirLinha(tabela, titulo, genero) {
  var linha = tabela.insertRow(-1);

  var col1 = linha.insertCell(0);
  var col2 = linha.insertCell(1);
  var col3 = linha.insertCell(2);

  col1.textContent = titulo;
  col2.textContent = genero;
  col3.innerHTML = "<input type='checkbox'>";

  // for(var i = 0; i < 3; i++){
  //     var col = linha.insertCell(i);

  //     if(i == 0){
  //         col.textContent = titulo;
  //     }else if(i == 1){
  //         col.textContent = genero;
  //     }else{
  //         col.innerHTML = "<input type='checkbox'>";
  //     }
  // }
}

function gravarFilme(titulo, genero) {
  if (localStorage.getItem("filmesTitulo")) {
    var filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
    var filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;

    localStorage.setItem("filmesTitulo", filmesTitulo);
    localStorage.setItem("filmesGenero", filmesGenero);
  } else {
    localStorage.setItem("filmesTitulo", titulo);
    localStorage.setItem("filmesGenero", genero);
  }
}

function recuperarFilme() {
  if (localStorage.getItem("filmesTitulo")) {
    var titulos = localStorage.getItem("filmesTitulo").split(";");
    var generos = localStorage.getItem("filmesGenero").split(";");

    var tbFilmes = document.getElementById("tbFilmes");

    for (var i = 0; i < titulos.length; i++) {
      inserirLinha(tbFilmes, titulos[i], generos[i]);
    }
  }
}
recuperarFilme();

var ckTodos = document.getElementById("ckTodos");

ckTodos.addEventListener("change", function () {
  var tbFilmes = document.getElementById("tbFilmes");

  var ckExcluir = tbFilmes.getElementsByTagName("input");

  var status = ckTodos.checked;

  for (var i = 0; i < ckExcluir.length; i++) {
    ckExcluir[i].checked = status;
  }
});

function removerFilme() {
  var tbFilmes = document.getElementById("tbFilmes");
  var ckExcluir = tbFilmes.getElementsByTagName("input");

  var temSelecionado = false;

  for (var i = 1; i < ckExcluir.length; i++) {
    if (ckExcluir[i].checked) {
      temSelecionado = true;
      break;
    }
  }

  if (!temSelecionado) {
    alert("Não há itens selecionados para a exclusão.");
    return;
  }

  if (confirm("Confirma a exclusão dos filmes selecionado?")) {
    localStorage.removeItem("filmesTitulo");
    localStorage.removeItem("filmesGenero");

    for (i = 1; i < ckExcluir.length; i++) {
      if (!ckExcluir[i].checked) {
        titulo = tbFilmes.rows[i].cells[0].textContent;
        genero = tbFilmes.rows[i].cells[1].textContent;
        gravarFilme(titulo, genero);
      }
    }

    for (i = ckExcluir.length - 1; i > 0; i--) {
      if (ckExcluir[i].checked) {
        tbFilmes.deleteRow(i);
      }
    }

    ckExcluir[0].checked = false;
  }
}

var btnExcluir = document.getElementById("btnExcluir");
btnExcluir.addEventListener("click", removerFilme);
