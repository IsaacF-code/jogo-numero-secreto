function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Desafio 3');

let valorAltura = document.querySelector("input[name='altura']").value;
let valorPeso = document.querySelector("input[name='peso']").value;

function imc(altura, peso){
    let valorImc = peso / (altura * altura);

    if(valorImc < 18.5) {
        alert("Cuidado! Você está abaixo do peso.");
    } else if(valorImc >= 18.5 && valorImc <= 24.9) {
        alert("Parabéns! Você está no peso ideal.");
    } else if(valorImc >= 25 && valorImc <= 29.9) {
        alert("Cuidado! Você está levemente acima do peso.");
    } else if(valorImc >= 30 && valorImc <= 39.9){
        alert("Alerta! Você está acima do peso.");
    } else if(valorImc >= 40){
        alert("Perigo! Você está com obsidade mórbida.");
    }
    console.log("Depois do IF")
}

imc(valorAltura, valorPeso);