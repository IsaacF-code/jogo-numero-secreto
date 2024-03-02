// Questão 1
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Desafio 2');

function exibirNoConsole() {
    console.log("Olá, mundo!");
}

exibirNoConsole();

// Questão 2
function pegaInput() {
    let valorInput = document.querySelector('input').value;
    console.log(`Olá, ${valorInput}!`);
}

// Questão 3
function enviarNumero() {
    let valorNumero = document.getElementById('valorNumero').value
    let dobraValor = valorNumero * 2;
    console.log(`O valor dobrado de ${valorNumero} é = ${dobraValor}`);
}

// Questão 4
function mediaValor() {
    let numero1 = parseInt(prompt("Digite qualquer valor:"));
    let numero2 = parseInt(prompt("Digite outro valor:"));
    let numero3 = parseInt(prompt("Digite mais um valor:"));

    let valorMedia = (numero1 + numero2 + numero3)/3
    console.log(`A média dos números: ${numero1}, ${numero2} e ${numero3}, é = ${valorMedia}`);
}

// Questão 5
function maiorNumero() {
    let numero1 = parseInt(prompt("Digite um número:"));
    let numero2 = parseInt(prompt("Digite outro número:"));

    if(numero1 > numero2) {
        console.log(`O maior número é ${numero1}`);
    } else {
        console.log(`O maior número é ${numero2}`);
    }
}

// Questão 6
function valorMultiplicado() {
    let numero = document.getElementById('valorMultiplicado').value;
    let valorMultiplicadoPorEleMesmo = numero * numero;

    console.log(`O resultado é ${valorMultiplicadoPorEleMesmo}`);
}