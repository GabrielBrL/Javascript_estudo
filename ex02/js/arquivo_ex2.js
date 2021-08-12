function converterMinutosHoras()
{
    var inputTitulo = document.getElementById("inputTitulo");
    var inputMinutos = document.getElementById("inputDuracao");
    var outHoras = document.getElementById("outDuracao");
    var outTitulo = document.getElementById("outTitulo");

    var titulo = inputTitulo.value;
    var duracao = Number(inputMinutos.value);

    var horas = Math.floor(duracao / 60);
    var minutos = duracao % 60;

    outTitulo.textContent = titulo;
    outHoras.textContent = horas + " horas(s) e " + minutos + " minuto(s)";
}

var btConverter = document.getElementById("btnConverter");

btConverter.addEventListener("click", converterMinutosHoras);