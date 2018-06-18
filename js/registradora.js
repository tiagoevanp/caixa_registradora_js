//Initialization of tooltips
document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elements);
});

function maskMoney() {
  money = document.getElementById('value').value
  document.getElementById('value').value = Number(money).toFixed(2);
}

var invoice = []; 

function registerItem(){
  if (!quantity.value) {
    quantity.value = 1;
  }
  if (!item.value) {
    item.value = "something";
  }
  if (!value.value) {
    value.value = 0;
  }
  
  var total = value.value*quantity.value;
  var textQuantity = document.createTextNode(quantity.value+"x");
  var textItem = document.createTextNode(item.value);
  var textValue = document.createTextNode(Number(value.value).toFixed(2));
  var textTotal = document.createTextNode((value.value * quantity.value).toFixed(2));
  var tr = document.createElement("tr");
  var tdQuantity = document.createElement("td");
  var tdItem = document.createElement("td");
  var tdValue = document.createElement("td");
  var tdTotal = document.createElement("td");
  tr.appendChild(tdQuantity);
  tr.appendChild(tdItem);
  tr.appendChild(tdValue);
  tr.appendChild(tdTotal);
  tdQuantity.appendChild(textQuantity);
  tdItem.appendChild(textItem);
  if (quantity.value > 1) {
    tdValue.appendChild(textValue);
    tdTotal.appendChild(textTotal);
  }
  else{
    tdTotal.appendChild(textTotal);
  }
  document.getElementById("tableInvoice").appendChild(tr);
  
  invoice.push(total);
}

function showTotal(){
  var soma = 0;
  
  for(var i = 0; i < invoice.length; i++){
	    soma += invoice[i];
	}
  var table = document.createElement("table");
  var pLine = document.createElement("p");
  var trTotal = document.createElement("tr");
  var tdTotal = document.createElement("td");
  var textTotal = document.createTextNode("$ "+ soma.toFixed(2));
  var textLine = document.createTextNode("------------------------------------------");
  pLine.setAttribute('id', 'lineEnd');
  document.getElementById('invoice').appendChild(pLine);
  document.getElementById('invoice').appendChild(table)
  table.appendChild(trTotal);
  pLine.appendChild(textLine);
  trTotal.appendChild(tdTotal);
  tdTotal.setAttribute('style', 'text-align: right')
  tdTotal.appendChild(textTotal);
  
  var regBtn = document.getElementsByName("reg");
  var totalBtn = document.getElementsByName("total");
  regBtn[0].classList.add("disabled");
  totalBtn[0].classList.add("disabled");
}

function cleanInvoice(){
  if(confirm("You realy want to do this?")){
    invoice = [];
    
    var invoiceNode = document.getElementById("invoice")
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i <= tables.length; i++) {
      invoiceNode.removeChild(tables[0]);
    }
    invoiceNode.removeChild(document.getElementById('lineEnd'));

    var table = document.createElement("table");
    table.setAttribute('id', 'tableInvoice');
    invoiceNode.appendChild(table);

    var regBtn = document.getElementsByName("reg");
    var totalBtn = document.getElementsByName("total");
    
    if (regBtn[0].classList.contains("disabled") && totalBtn[0].classList.contains("disabled")) {
      regBtn[0].classList.remove("disabled");
      totalBtn[0].classList.remove("disabled");
    }    
  }
}

