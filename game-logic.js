function jogar(jogador) {
    const opcoes = ["pedra", "papel", "tesoura"];
    const computador = opcoes[Math.floor(Math.random() * 3)];
    let resultado = "";

    if (jogador === computador) {
        resultado = "Empate!";
    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        resultado = "Você ganhou!";
    } else {
        resultado = "Você perdeu!";
    }

    document.getElementById("resultado").textContent =
        "Você escolheu " + jogador + " | Computador escolheu " + computador + " → " + resultado;
}
