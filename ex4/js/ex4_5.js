var numContas = 0;
var valTotal = 0;
var resposta = "";

function registrarContas()
{
    var inputDescricao = document.getElementById("inputDescricao");
    var inputValor = document.getElementById("inputPagar");
    var outListaDescricao = document.getElementById("outListaContas");
    var outTotal = document.getElementById("outTotal");

    var valor = Number(inputValor.value);
    if(inputDescricao.value == "" || valor == 0 || isNaN(valor)){
        alert("Informe os dados corretamente...");
        inputDescricao.focus();
        return;
    }

    numContas++;
    valTotal += valor;

    resposta += inputDescricao.value + " - R$: " + valor.toFixed(2) + "\n";

    outListaDescricao.textContent = resposta + "--------------------------------";
    outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

    inputDescricao.value = "";
    inputValor.value = "";
    inputDescricao.focus();
}

var btnRegistrar = document.getElementById("btnRegistrar");
btnRegistrar.addEventListener("click", registrarContas);