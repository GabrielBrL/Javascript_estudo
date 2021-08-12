const TAXA_MULTA = 2/100;
const TAXA_JUROS = 0.33/100;
function calcularMultaJuros(){
    var inputDataVenc = document.getElementById("inputData");
    var inputValor = document.getElementById("inputValor");
    var outMulta = document.getElementById("outMulta");
    var outJuros = document.getElementById("outJuros");
    var outTotal = document.getElementById("outTotal");

    var dataVenc = inputDataVenc.value;
    var valor = Number(inputValor.value);

    if(dataVenc == "" || valor == 0 || isNaN(valor)){
        alert("Informe os dados corretamente!");
        inputDataVenc.focus();
        return;
    }

    var hoje = new Date();
    var vencto = new Date();

    var partes = dataVenc.split("-");
    vencto.setDate(Number(partes[2]));
    vencto.setMonth(Number(partes[1]) - 1);
    vencto.setFullYear(Number(partes[0]));

    var atraso = hoje - vencto;

    var multa = 0;
    var juros = 0;

    if(atraso > 0){
        var dias = Math.round(atraso / 86400000);

        multa = valor * TAXA_MULTA;
        juros = (valor * TAXA_JUROS) * dias;
    }

    var total = valor + multa + juros;

    outMulta.value = multa.toFixed(2);
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);

}

var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularMultaJuros);

function limparCampos(){
    location.reload();
}

var btnNovaConta = document.getElementById("btnNovaConta");
btnNovaConta.addEventListener("click", limparCampos);