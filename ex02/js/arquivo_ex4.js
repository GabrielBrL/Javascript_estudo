function calcularPreco()
{
    let inputPreco = document.getElementById("inputQuiloPreco").value;
    let inputConsumo = document.getElementById("inputConsumo").value;

    let totalPagar = inputPreco * (inputConsumo/1000);

    document.getElementById("outPreco").textContent = "Total: " + totalPagar.toFixed(2);
}

let btnCalc = document.getElementById("btnPreco");

btnCalc.addEventListener("click", calcularPreco);