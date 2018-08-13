//Variáveis globais
var numeroSorteado;
var chuteTexto;
var chuteInt;
var terminou = false;
var tentativas = 0;

function jogo() {
    //Sorteia um número aleatório entre 0 e 99
    var numeroAleatorio = Math.random() * 100;
    //Converte o número para um valor inteiro
    var numeroAleatorio = Math.floor(numeroAleatorio);
    //Somar mais um para o sorteio ser entre 1 e 100
    numeroSorteado = numeroAleatorio + 1;

    //Enquanto o verificador não retornar verdadeiro o loop será executado
    while (terminou != true) {
        chuteTexto = prompt("Sorteei um número entre 1 e 100 \n Adivinhe qual é");
        chuteInt = parseInt(chuteTexto);
        tentativas++;
        terminou = verificador();

    }

}

function verificador() {
    if (isNaN(chuteInt)) {
        alert("Por favor insira um número");
        return false;
    }
    if (chuteInt < 1 || chuteInt > 100) {
        alert("Digite um número entre 1 e 100");
        return false;
    }
    if (chuteInt > numeroSorteado) {
        alert("O número sorteado é menor")
    }
    if (chuteInt < numeroSorteado) {
        alert("O número sorteado é maior");
    }
    if (chuteInt == numeroSorteado) {
        alert("Parabéns você acertou em " + tentativas + " tentativas \n \n O número sorteado foi: " + numeroSorteado);
        return true;
    }
}