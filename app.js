function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Desafio 3');

// -------- Questão 1 ----------

// Maneira recebendo o valor no input

function imc(){
    let valorAltura = document.querySelector("input[name='altura']").value;
    let valorPeso = document.querySelector("input[name='peso']").value;
    let alturaMetros = valorAltura / 100;
    let valorImc = valorPeso / (alturaMetros * alturaMetros);
    console.log(valorPeso)
    console.log(alturaMetros)
    console.log(valorImc.toFixed(2))

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

// Maneira recebendo parâmetros

function calcularImc(altura, peso){
    let alturaMetros = altura / 100;
    let valorImc = peso / (alturaMetros * alturaMetros);
    console.log(valorImc.toFixed(2)); // toFixed -> Serve para definir quantos números depois da vírgula irão ter
}

calcularImc(180, 82);

// Questão 2

function calculaFatorial(numero){
    let contador = 1;
    let numeroFatorial;

    while(contador < numero){
        numeroFatorial = numero * contador;
        contador++;
    }
    console.log(numeroFatorial);
    console.log(contador)
}

calculaFatorial(5);