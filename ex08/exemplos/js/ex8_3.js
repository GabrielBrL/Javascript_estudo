var inputsRadio = document.getElementsByTagName("input");
for (var i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener("change", trocaClube);
}

function trocaClube() {
  var imgClube = document.getElementById("imgClube");
  var divTitulo = document.getElementById("divTitulo");

  var clubes = ["Brasil", "Pelotas", "Farroupilha"];

  for (var i = 0; i < clubes.length + 1; i++) {
    if (inputsRadio[i].checked) {
      var selecao = i;
      break;
    }
  }
  if (selecao < clubes.length) {
    divTitulo.className = "row cores" + clubes[selecao];

    imgClube.src = "img/" + clubes[selecao].toLowerCase() + ".png";
    imgClube.className = "exibe";
    imgClube.alt = "Simbolo do " + clubes[selecao];
    localStorage.setItem("clube", clubes[selecao]);
  } else {
    divTitulo.className = "row";
    imgClube.className = "oculta";
    imgClube.alt = "";
    localStorage.removeItem("clube");
  }
}

function verificaClube() {
  if (localStorage.getItem("clube")) {
    var clube = localStorage.getItem("clube");

    if (clube == "Brasil") {
      inputsRadio[0].checked = true;
    } else if (clube == "Pelotas") {
      inputsRadio[1].checked = true;
    } else {
      inputsRadio[2].checked = true;
    }
    trocaClube();
  }
}

verificaClube();
