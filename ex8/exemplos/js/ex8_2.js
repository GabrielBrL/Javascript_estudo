function trocarClube() {
    var imgClube = document.getElementById("imgClube");
    var divTitulo = document.getElementById("divTitulo");

    var clube;

    if(rbBrasil.checked){
        clube = "Brasil";
    } else if(rbPelotas.checked){
        clube = "Pelotas";
    } else if(rbFarroupilha.checked){
        clube = "Farroupilha";
    }else{
        clube = "Nenhum"
    }

    divTitulo.className = "row cores" + clube;

    if(clube != "Nenhum"){
        imgClube.src = "img/"+clube.toLowerCase() + ".png";
        imgClube.className = "exibe";
        imgClube.alt = "Simbolo do "+clube;
    }else{
        imgClube.src = "";
        imgClube.className = "oculta";
        localStorage.removeItem("clube");
    }

    localStorage.setItem("clube", clube);
}

var rbBrasil = document.getElementById("rbBrasil");
var rbPelotas = document.getElementById("rbPelotas");
var rbFarroupilha = document.getElementById("rbFarroupilha");
var rbNenhum = document.getElementById("rbNenhum");

// rbBrasil.addEventListener("change", trocarClube);
// rbPelotas.addEventListener("change", trocarClube);
// rbFarroupilha.addEventListener("change", trocarClube);
// rbNenhum.addEventListener("change", trocarClube);

var inputsRadio = document.getElementsByTagName("input");
for(var i = 0; i < inputsRadio.length; i++){
    inputsRadio[i].addEventListener("change", trocarClube);
}

function verificaClube(){
    if(localStorage.getItem("clube")){
        var clube = localStorage.getItem("clube");

        if(clube == "Brasil"){
            rbBrasil.checked = true;
        } else if(clube == "Pelotas"){
            rbPelotas.checked = true;
        } else if(clube == "Farroupilha"){
            rbFarroupilha.checked = true;
        } else{
            rbNenhum.checked = true;
        }

        trocarClube();
    }
}

verificaClube();