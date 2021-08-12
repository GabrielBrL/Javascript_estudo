function financiamento()
{
    let inputNome = document.getElementById("inputNomeV").value;
    let inputPreco = document.getElementById("inputPrecoV").value;

    let entradaPreco = Number(inputPreco) / 2;
    let parcela = (inputPreco - entradaPreco) / 12;

    document.getElementById("outVeiculo").textContent = "Veículo: "+inputNome;
    document.getElementById("outEntradaPreco").textContent = "R$ "+entradaPreco.toFixed(2);
    document.getElementById("outParcelaPreco").textContent = "12x"+parcela.toFixed(2);
}

let btnEnviar = document.getElementById("btnVeiculo");

btnEnviar.addEventListener("click", financiamento);