let botao = document.getElementById('btn');
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let erro_span = document.getElementById('erro-email');

function verificarCampos() {
    if (email.value !== '' && senha.value !== '') {
        botao.disabled = false; 
    } else {
        botao.disabled = true;
    }
}

email.addEventListener('input', verificarCampos);
senha.addEventListener('input', verificarCampos);

verificarCampos();

botao.addEventListener('click', function() {
    //verificar se email é válido   
    let emailValue = email.value;
    let emailValido = false;


    //verificar se tem @ e . somente depois de algum caractere depois do @
    if (emailValue.includes('@') && emailValue.includes('.') && emailValue.indexOf('@') < emailValue.lastIndexOf('.')) {
        emailValido = true;
    }

    if (emailValido) {
        alert('Login realizado com sucesso!');
    } else {
        erro_span.style.display = 'inline';
    }
});