function exibirMoedas(){
    var num1_00 = Math.ceil(Math.random() * 5);
    var num0_50 = Math.ceil(Math.random() * 5);
    var num0_25 = Math.ceil(Math.random() * 5);
    var num0_10 = Math.ceil(Math.random() * 5);

    var divMoedas = document.getElementById("divMoedas");

    var alt1_00 = "Moedas de um real";
    var alt0_50 = "Moedas de cinquenta centavos";
    var alt0_25 = "Moedas de vinte-cinco centavos";
    var alt0_10 = "Moedas de dez centavos";

    criarMoedas(num1_00, divMoedas, "1_00.jpg", alt1_00, "moeda1_00");
    criarMoedas(num0_50, divMoedas, "0_50.jpg", alt0_50, "moeda0_50");
    criarMoedas(num0_25, divMoedas, "0_25.jpg", alt0_25, "moeda0_25");
    criarMoedas(num0_10, divMoedas, "0_10.jpg", alt0_10, "moeda0_10");

}
exibirMoedas();

var btnExibir = document.getElementById("btnExibir");
btnExibir.addEventListener("click", function(){
    location.reload();
});

function criarMoedas(num, pai, img, textoAlt, classe){
    for(var i = 0; i < num; i++){
        var novaMoeda = document.createElement("img");
        novaMoeda.src = "../img/"+img;
        novaMoeda.textoAlt = textoAlt;
        novaMoeda.className = classe;
        pai.appendChild(novaMoeda);
    }
    var br = document.createElement("br");
    pai.appendChild(br);
}

function conferirSoma(){
    var inputSoma = document.getElementById("inputSoma");

    var soma = Number(inputSoma.value);

    if(soma == 0 || isNaN(soma)){
        alert("Informe o valor a ser somado usando pontos para casas decimais");
        inputSoma.focus();
        return;
    }
    
    var divMoedas = document.getElementById("divMoedas");

    var moedas = document.getElementsByTagName("img");

    var totalMoedas = 0;

    for(var i = 0; i < moedas.length; i++){
        if(moedas[i].className == "moeda1_00"){
            totalMoedas += 1;
        }else if(moedas[i].className == "moeda0_50"){
            totalMoedas += 0.50;
        }else if(moedas[i].className == "moeda0_25"){
            totalMoedas += 0.25;
        }else{
            totalMoedas += 0.10;
        }
    }

    var div = document.createElement("div");
    var h3 = document.createElement("h3");

    if(soma == totalMoedas.toFixed(2)){
        div.className = "alert alert-success";
        var mensagem = "Parab??ns, voc?? acertou";
    }else{
        div.className = "alert alert-danger";
        var mensagem = "Ops algo de errado... resposta certa ?? R$ " +totalMoedas.toFixed(2);
    }

    var texto = document.createTextNode(mensagem);

    h3.appendChild(texto);
    div.appendChild(h3);
    divMoedas.appendChild(div);

    btnConferir.disabled = true;
}

var btnConferir = document.getElementById("btnConferir");
btnConferir.addEventListener("click", conferirSoma);