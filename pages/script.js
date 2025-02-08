document.addEventListener("DOMContentLoaded", function () {
    let inputExistente = document.getElementById("input_tzeet");
    if (inputExistente) {
        inputExistente.addEventListener("input", atualizarContador);
    }
});

document.getElementById("tzeetar").addEventListener("click", function () {
    let modal = document.getElementById("modal");

    // Definir o conteúdo do modal
    modal.innerHTML = `
        <img src="/src/img/profilePhoto.jpeg" alt="" class="profilePhotoTweet">
        <section class="home_do_usuario">
            <div class="inputs">
                <textarea id="input_tzeet_modal" class="input_tzeet" placeholder="O que você está pensando?"></textarea>
                <a href="#" class="reply"><i class="bi bi-globe2"></i> Every one can reply</a>
            </div>
            <section>
                <div class="multimedia">
                    <a href="#"><i class="bi bi-image"></i></a>
                    <a href="#"><i class="bi bi-filetype-gif"></i></a>
                    <a href="#"><i class="bi bi-emoji-smile"></i></a>
                    <a href="#"><i class="bi bi-reception-4"></i></a>
                    <a href="#"><i class="bi bi-calendar-event-fill"></i></a>
                    <a href="#"><i class="bi bi-geo-alt"></i></a>
                </div>
                <div class="status_e_envio">
                    <span class="counter" id="counter" style="display: none;">140</span>
                    <a href="#" class="add_tzeeter"><i class="bi bi-plus-circle"></i></a>
                    <button id="botao" class="botao" disabled>Enviar</button>
                </div>
            </section>
        </section>`;

    // Exibir o modal
    modal.showModal();

    // Adicionar evento ao novo textarea dentro do modal
    let textareaModal = document.getElementById("input_tzeet_modal");
    textareaModal.addEventListener("input", atualizarContador);
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
