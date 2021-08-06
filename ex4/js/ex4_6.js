function calcAno()
{
    var numChinchilaInput = document.getElementById("inputChinchila");
    var anoChinchilaInput = document.getElementById("inputAnos");
    var outResposta = document.getElementById("resposta");

    var outNumeroC = Number(numChinchilaInput.value);
    var outAnoC = Number(anoChinchilaInput.value);
    var resposta = "";
    for(var i = 1; i <= outAnoC; i++){
        resposta += i +"º Ano: " + outNumeroC + " Chinchilas\n";
        outNumeroC *= 3;
    }

    outResposta.textContent = resposta;

    numChinchilaInput.value = "";
    anoChinchilaInput.value = "";
    numChinchilaInput.focus();
}

var btnC = document.getElementById("btnChinchila");
btnC.addEventListener("click", calcAno);