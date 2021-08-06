function adicionaServico(){
    var inputServico = document.getElementById("inputServico");

    var servico = inputServico.value;

    if(servico == ""){
        alert("Descreva o serviço!");
        inputServico.focus();
        return;
    }

    if(localStorage.getItem("servicos")){
        var servicoNome = localStorage.getItem("servicos") + ";" + servico;

        localStorage.setItem("servicos", servicoNome);
    }else{
        localStorage.setItem("servicos", servico);
    }
    inputServico.value = "";
    inputServico.focus();
    mostraServico();
    servicosPendentes();

}

function servicosPendentes(){
    var outPendentes = document.getElementById("outPendentes");
    if(localStorage.getItem("servicos")){
        var servicosPd = localStorage.getItem("servicos").split(";");
        
        outPendentes.textContent = servicosPd.length;
    }else{
        outPendentes.textContent = 0;
    }
}
servicosPendentes();

var btnAdicionar = document.getElementById("btnAdicionar");
btnAdicionar.addEventListener("click", adicionaServico);

function executaServico(){
    
    if(localStorage.getItem("servicos") <= 0){
        alert("Não há serviços para executar");
        return;
    }
    if(localStorage.getItem("servicos")){
        var lista = localStorage.getItem("servicos").split(";");
        lista.shift();
        localStorage.setItem("servicos", lista.join(";"));
    }
    mostraServico()
    servicosPendentes();
    
}
var btnExecutar = document.getElementById("btnExecutar");
btnExecutar.addEventListener("click", executaServico);

function mostraServico(){
    var outExecucao = document.getElementById("outExecucao");
    var divExecucao = document.getElementById("divExecucao");

    var lista_serv = localStorage.getItem("servicos").split(";").slice();

    var mensagem = "";
    for(var i = 0; i < localStorage.getItem("servicos").split(";").length; i++){
        mensagem += "\n" + lista_serv[i].toUpperCase();
    }

    outExecucao.textContent = mensagem;
}
mostraServico();