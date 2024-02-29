let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function botaoConsole() {
    console.log("O botão foi clicado!");
}

function botaoAlert() {
    alert("Eu amo JS");
}

function botaoPrompt() {
    let cidade = prompt("Digite o nome de uma cidade do Brasil:"); 
    alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSoma(){
    let numero1 = parseInt(prompt("Digite um número para soma:"));
    let numero2 = parseInt(prompt("Digite outro número para somar:"));
    let soma = numero1 + numero2;

    alert(`A soma de ${numero1} + ${numero2} é: ${soma}`);
}