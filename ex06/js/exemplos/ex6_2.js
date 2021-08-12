function montarDica() {
  var inputFruta = document.getElementById("inputFrutas");
  var outDica = document.getElementById("outDica");

  var fruta = inputFruta.value;

  if (fruta == "") {
    alert("Informe a fruta!");
    inputFruta.focus();
    return;
  }

  var resposta = fruta.charAt(0);
  var estrelas = "*";
  var tam = fruta.length;

  for (var i = 1; i < tam; i++) {
    if (fruta.charAt(i) == fruta.charAt(0)) {
      resposta += fruta.charAt(0);
    } else {
      resposta += "_";
    }
    estrelas += "*";
  }
  outDica.textContent = resposta;
  inputFruta.value = estrelas;
}

var btnMontar = document.getElementById("btnDica");
btnMontar.addEventListener("click", montarDica);
