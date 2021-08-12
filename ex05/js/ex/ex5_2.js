var erros = [];

var sorteado = Math.floor(Math.random() * 100) + 1;

const CHANCES = 6;

function apostarNumero(){
    var inputNumero = document.getElementById("inputNumero");
    var numero = Number(inputNumero.value);

    if(numero <= 0 || numero > 100 || isNaN(numero)){
        alert("Informe um número válido!");
        inputNumero.focus();
        return;
    }

    var outDica = document.getElementById("outDica");
    var outErros = document.getElementById("outErros");
    var outChances = document.getElementById("outChances");

    var btnApostar = document.getElementById("btnApostar");
    var btnJogarNovamente = document.getElementById("btnJogar");


    if(numero == sorteado){
        alert("Acertou!!");
        btnApostar.disabled = true;
        btnJogarNovamente.className = "exibe";
        outDica.textContent = "Número sorteado " + sorteado;
    }
    else{
        if(erros.indexOf(numero) >= 0){
            alert("Errou! Número apostado "+ numero +"... Tente de novo!");
        }
        else{
            erros.push(numero);
            var numErros = erros.length;
            var numChances = CHANCES - numErros;
            outErros.textContent = numErros + "("+ erros.join(", ") + ")";
            outChances.textContent = numChances;
            if(numChances == 0){
                alert("Suas chances se esgotaram!");
                btnApostar.disabled = true;
                btnJogarNovamente.className = "exibe";
                outDica.textContent = "Game Over! O número sorteado foi " + sorteado;
            }
            else{
                var dica = numero < sorteado ? "maior" : "menor";
                outDica.textContent = "Dica Tente um número " + dica + " que " + numero;
            }
        }
    }
    inputNumero.value = "";
    inputNumero.focus();
}

function jogarNovamente(){
    location.reload();
}

var btnApostar = document.getElementById("btnApostar");
btnApostar.addEventListener("click", apostarNumero);

var btnJogarNovamente = document.getElementById("btnJogar");
btnJogarNovamente.addEventListener("click", jogarNovamente);