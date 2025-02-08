document.addEventListener("DOMContentLoaded", function () {
    let inputExistente = document.getElementById("input_tzeet");
    if (inputExistente) {
        inputExistente.addEventListener("input", atualizarContador);
    }
});

// Função para atualizar contador de caracteres
function atualizarContador() {
    let textarea = this;
    let counter = document.getElementById("counter");
    let botao = document.getElementById("botao");
    let maxLength = 140;
    let length = textarea.value.length;
    let remaining = maxLength - length;

    counter.innerText = remaining;
    counter.style.display = length === 0 ? "none" : "inline";
    counter.style.color = length > 140 ? "red" : length >= 100 ? "rgb(255, 200, 0)" : "black";

    botao.disabled = length > maxLength;
}
