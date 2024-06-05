// script.js

// Script para lidar com o formulário de postagem
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let conteudo = document.getElementById('conteudo').value;

    if (conteudo) {
        let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
        comentarios.push(conteudo);
        localStorage.setItem('comentarios', JSON.stringify(comentarios));

        document.getElementById('response').innerText = 'Mensagem publicada com sucesso!';
        document.getElementById('conteudo').value = '';
    } else {
        document.getElementById('response').innerText = 'Erro ao publicar a mensagem.';
    }
});

// Script para exibir os comentários em ver_comentarios.html
document.addEventListener('DOMContentLoaded', function() {
    let comentariosDiv = document.getElementById('comentarios');
    let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    if (comentarios.length > 0) {
        comentarios.forEach(function(comentario) {
            let comentarioDiv = document.createElement('div');
            comentarioDiv.className = 'comentario';
            comentarioDiv.innerText = comentario;
            comentariosDiv.appendChild(comentarioDiv);
        });
    } else {
        comentariosDiv.innerText = 'Nenhum comentário encontrado.';
    }
});

