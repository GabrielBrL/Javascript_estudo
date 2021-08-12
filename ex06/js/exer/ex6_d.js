function calculaMulta(){
    var inputData = document.getElementById("inputData");
    var inputValor = document.getElementById("inputVlrMulta");
    var outData= document.getElementById("outDataLimit");
    var outValor = document.getElementById("outValorMulta");
    
    var valorMulta = inputValor.value * 0.8;
    
    var data = inputData.value;
    
    var dataLimit = new Date();

    var partes = data.split("-");
    dataLimit.setDate(Number(partes[2]));
    dataLimit.setMonth(Number(partes[1]) - 1);
    dataLimit.setFullYear(Number(partes[0]));

    dataLimit.setDate(dataLimit.getDate() + 90);

    outData.textContent = "Data limite para pagamento com desconto: " + formataData(dataLimit); 
    outValor.textContent = "Valor com desconto R$: " + valorMulta.toFixed(2);

    
}

function formataData(data){
    var mes = data.getMonth();
    if(mes < 10){
        mes = "0"+mes.toString();
    }
    else{
        mes.toString();
    }
    return data.getDate().toString() + "/" + mes + "/" + data.getFullYear().toString();
}

var btnCalc = document.getElementById("btnCalcula");
btnCalc.addEventListener("click", calculaMulta);