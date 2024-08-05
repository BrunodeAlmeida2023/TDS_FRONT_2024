function enviarMensagem() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const mensagem = "Muito obrigado, senhor " + nome + ", Acabamos de enviar um e-mail para " + email;

    document.getElementById('mensagem_confirmacao').innerText = mensagem;
}

