function geraNumero() {
    var numeroAleatorio =  Math.floor(Math.random() * 10000);
   
    if(numeroAleatorio < 1000){

       numeroAleatorio = ("0000" + numeroAleatorio).slice(-4) ;

    }
    console.log(numeroAleatorio);

    return numeroAleatorio;
}

let numeroGerado = geraNumero();



function filtraCaracteres(){

    let input = document.getElementById("pin");

    input.onkeydown = function(event) {
        if(event.key === 'Enter'){
        let botao = document.getElementById("botao");
        botao.click();
    }}

    input.value = input.value.replace(/[^\d]/g, ''); 
  
}

function valida(){

    
    let pin = document.getElementById("pin");

    let erro = document.getElementById("erro");

    let valor = pin.value;

    let resultado = numeroGerado - valor;

    if(valor.length < 4){
        erro.innerHTML = "O PIN precisa ter 4 dígitos";
        return;
    } else{
        erro.innerHTML = "";
    }

    if(valor == numeroGerado){
        alert("Você acertou o PIN ! Um novo foi gerado.")
        numeroGerado = geraNumero();
        return;
    } 
    
    if(resultado >= 0){
    
        if (resultado <= 500 ) {
        erro.innerHTML = "O valor correto é um pouco maior !";
        return;
    } else if (resultado <= 3000) {
        erro.innerHTML = "O valor correto é maior !";
        return;
    } else if (resultado <= 9999) {
        erro.innerHTML = "O valor correto é  muito maior !";
        return;
    } 
} else {

    if (resultado >= -500 ) {
        erro.innerHTML = "O valor correto é um pouco menor !";
        return;
    } else if (resultado >= -3000) {
        erro.innerHTML = "O valor correto é menor !";
        return;
    } else if (resultado >= -9999) {
        erro.innerHTML = "O valor correto é  muito menor!";
        return;
    } 


}
}

