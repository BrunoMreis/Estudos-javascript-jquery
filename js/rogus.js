if (document.getElementsByClassName == undefined) {
alert("getElementsByClassName not found");
}

function moneyTextToFloat(text) {
	var cleanText = text.replace("R$ ", "").replace(",", ".");
	return parseFloat(cleanText);
}

function floatToMoneyText(value) {
	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$ " + text;
	return text.substr(0, text.length - 2) + "," + text.substr(-2);
}


function onQuantityChange() {
	writeTotal(calculateTotalProducts());
}

function onDocumentLoad() {
	var textEdits = document.getElementsByClassName("quantity");

	for(var i = 0; i < textEdits.length; i++) {
		textEdits[i].onchange = onQuantityChange;
	}
}

window.onload = onDocumentLoad;


if(document.getElementsByClassName == undefine){
    
    alert("getElementsByClass not found");
    
    document.getElementsByClassName = function(className){
        alert("Regozijai-vos, usuário de Internet Explorer");
            var todosElementos = document.getElementsByTagName("*");
            var resultados =[];

            var elemento;

            for(var i =0; (elemento = todosElementos[i])!= null;i++){
            var elementoClass = elemento.className;
                if(elementoClass && elementoClass.lastIndexOf(className)!= -1){
                    resultados.push(elemento);
            }
        }
        return resultados;
    }
  
}

//Reduzindo com jQuary=====================================================

function readTotal(){
    var total = $("#total").text();
    return moneyTextToFloat(total);
}

function writeTotal(value){
    var text = floatToMoneyText(value);
    $("#total").text(text);
}

function calculateTotalProducts(){
    var produtos = $(".produto");
    var total = 0;
        $(produtos).each(function(pos, produto) {
        var $produto = $(produto);
        var quantity = moneyTextToFloat(
        $produto.find(".quantity").val());
        var price = moneyTextToFloat(
        $produto.find(".price").text());
        total += quantity * price;
        });
    
    return total;
}
