var kids = [];

function pushKids() {
  var inputName = document.getElementById("inputName");
  var inputYears = document.getElementById("inputYears");

  var vname = inputName.value;
  var vyear = Number(inputYears.value);

  if (vname == "" || inputYears.value == "" || isNaN(vyear)) {
    alert("Give correctly the dates.");
    inputName.focus();
    return;
  }

  kids.push({ name: vname, year: vyear });

  inputName.value = "";
  inputYears.value = "";
  inputName.focus();

  listKids();
}

var btnAdd = document.getElementById("btnPush");
btnAdd.addEventListener("click", pushKids);

function listKids() {
  if (kids.length == 0) {
    alert("Do not have kids in the list");
    return;
  }

  var list = "";
  for (var i = 0; i < kids.length; i++) {
    list += kids[i].name + " - " + kids[i].year + " anos \n";
  }

  document.getElementById("outList").textContent = list;
}

var btnList = document.getElementById("btnList");
btnList.addEventListener("click", listKids);

function resumeKids() {
  if(kids.length == 0){
    alert("Do not have kids in the list");
    return;
  }

  var copy = kids.slice();

  copy.sort(function(a, b){ return a.year - b.year });

  var resume = "";

  var aux = copy[0].year;
  var names = [];

  for(var i=0; i < copy.length; i++){
    if(copy[i].year == aux){
      names.push(copy[i].name);
    }
    else{
      resume += aux + " year(s): " + names.length + " kid(s) - ";
      resume += (names.length / copy.length * 100).toFixed(2) + "%\n";
      resume += "(" + names.join(", ") + ")\n\n";

      aux = copy[i].year;
      names = [];
      names.push(copy[i].name);
    }
  }
  resume += aux + " ano(s): " + names.length + " kid(s) - ";
  resume += (names.length / copy.length * 100).toFixed(2) + "%\n";
  resume += "(" + names.join(", ") + ")\n\n";

  document.getElementById("outList").textContent = resume;
}

var btnResume = document.getElementById("btnResume");
btnResume.addEventListener("click", resumeKids);
