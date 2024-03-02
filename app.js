function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Desafio 2');

function exibirNoConsole() {
    console.log("Olá, mundo!");
}

exibirNoConsole();

function pegaInput() {
    let valorInput = document.querySelector('input').value;
    console.log(`Olá ${valorInput}!`);
}
