    var conta = [];	
    
    function adicionar_item(){
      var total = valor.value*quantidade.value;
      
      var f = document.createTextNode(quantidade.value+"x "+item.value+" | Preço unitário: R$ "+valor.value+" | Preço: R$ "+total.toFixed(2));
      var elemento1 = document.createElement("P");
      elemento1.appendChild(f);
      document.getElementById("compra").appendChild(elemento1);
      
      conta.push(total);
  	}
	
    function imprimir_total(){
		  var i = 0
		  var soma = 0;
		  
      for(var i = 0; i < conta.length; i++){
  		    soma+=conta[i];
  		}

		  var t = document.createTextNode("Total: R$ "+ soma.toFixed(2));
      var elemento2 = document.createElement("P");
      elemento2.appendChild(t);
      document.getElementById("compra").appendChild(elemento2);
    }

    function limpar_registros(){
		  var resposta = confirm("Você tem certeza que quer zerar os registros?");
      
      if(resposta === true){
        conta = [];
		    document.getElementById("compra").innerHTML = "";
      }
    }

