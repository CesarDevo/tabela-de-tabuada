function alerte() { 
    var x = prompt("Entre com um número maior e menor que 11");
try {
if (x <= 0) {
    throw("er1");
} if ( x >= 11) {
    throw("er2");
} if (isNaN(parseInt(x))) {
      throw ("er3");
}}

catch(e) {
    if(e=="er2"){
        alert("O número deve ser maior que 0");
    } if (e == "er2") {
        alert("o número deve ser maior que 11");
    } if (e == "er3") {
        alert ("Entre somente com número maior que 0 e menor que 11")
    }
}
}