function criptografa() {
  var inputMsm = document.getElementById("inputMensagem");
  var outMsm = document.getElementById("outMensagem");

  var mensagem = inputMsm.value;

  if (mensagem == "") {
    alert("!");
    inputMsm.focus();
    return;
  }

  var resposta = "";

  for (var i = 1; i < mensagem.length; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  for (var i = 0; i < mensagem.length; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  outMsm.textContent = resposta;
}

var btnCript = document.getElementById("btnCript");
btnCript.addEventListener("click", criptografa);

function descriptografa() {
  var inputMsm = document.getElementById("inputMensagem");
  var outMsm = document.getElementById("outMensagem");

  var mensagem = inputMsm.value;

  if (mensagem == "") {
    alert("!");
    inputMsm.focus();
    return;
  }

  var resposta = "";

  var metade = Math.floor(mensagem.length/2);

  if (mensagem.length % 2 == 0) {
    for (var i = metade; i < mensagem.length; i++) {
      resposta += mensagem.charAt(i);
      resposta += mensagem.charAt(i - metade);
    }
  } else {
    for (var i = metade; i < mensagem.length - 1; i++) {
      resposta += mensagem.charAt(i);
      resposta += mensagem.charAt(i - metade);
    }
    resposta += mensagem.charAt(i);
  }
  outMsm.textContent = resposta;
}

var btnDesCript = document.getElementById("btnDesCript");
btnDesCript.addEventListener("click", descriptografa);
