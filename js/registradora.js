//Initialization of tooltips
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);
});

function maskMoney() {
  money = document.getElementById('value').value
  document.getElementById('value').value = Number(money).toFixed(2);
}

var conta = []; 

function registerItem(){
  if (quantity.value == "") {
    quantity.value = 1
  }
  if (item.value == "") {
    item.value = "something";
  }
  if (value.value == "") {
    value.value = 0;
  }
  var total = value.value*quantity.value;
  var f = document.createTextNode(quantity.value+"x "+item.value+" | Price: $ "+value.value);
  var elemento1 = document.createElement("P");
  elemento1.appendChild(f);
  document.getElementById("invoice").appendChild(elemento1);
  
  conta.push(total);
}

function showTotal(){
  var soma = 0;
  
  for(var i = 0; i < conta.length; i++){
	    soma += conta[i];
	}

  var t = document.createTextNode("Total: R$ "+ soma.toFixed(2));
  var elemento2 = document.createElement("P");
  elemento2.appendChild(t);
  document.getElementById("invoice").appendChild(elemento2);
}

function cleanInvoice(){
  if(confirm("Você tem certeza que quer zerar os registros?")){
    conta = [];
    document.getElementById("invoice").innerHTML = "";
  }
}

