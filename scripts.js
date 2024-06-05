// script.js
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let conteudo = document.getElementById('conteudo').value;
    let imagem = document.getElementById('imagem').files[0];

    if (conteudo && imagem) {
        let reader = new FileReader();
        reader.onload = function(event) {
            let url = event.target.result;
            let urlParams = new URLSearchParams(window.location.search);
            let categoria = urlParams.get('categoria');
            let comentarios = JSON.parse(localStorage.getItem(`${categoria}_comentarios`)) || [];
            comentarios.push({ conteudo: conteudo, imagem: url });
            localStorage.setItem(`${categoria}_comentarios`, JSON.stringify(comentarios));

            document.getElementById('response').innerText = 'Mensagem publicada com sucesso!';
            document.getElementById('conteudo').value = '';
            document.getElementById('imagem').value = '';
        };
        reader.readAsDataURL(imagem);
    } else {
        document.getElementById('response').innerText = 'Erro ao publicar a mensagem. Certifique-se de incluir uma imagem e um comentário.';
    }
});
