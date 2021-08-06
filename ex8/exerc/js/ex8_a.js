function visita(){
    var outVisita = document.getElementById("outVisita");

    var contador = 0;

    if(localStorage.getItem("contador")){
        contador = Number(localStorage.getItem("contador"));
    }
    contador++;
    if(contador == 1){
        outVisita.textContent = "Bem vindo! Esta é a sua primeira visita ao nosso site";
    }else{
        outVisita.textContent = "Que bom que você voltou! Esta é a sua visita de número " + contador + " ao nosso site.";
    }

    localStorage.setItem("contador", contador);
}
visita()