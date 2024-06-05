// script.js

// Script para exibir os comentários na página de categorias (ver_comentarios.html)
document.addEventListener('DOMContentLoaded', function() {
    let urlParams = new URLSearchParams(window.location.search);
    let categoria = urlParams.get('categoria');

    if (categoria) {
        document.getElementById('categoriaTitle').innerText = `Comentários - ${categoria}`;
        let comentariosDiv = document.getElementById('comentarios');
        let comentarios = JSON.parse(localStorage.getItem(`${categoria}_comentarios`)) || [];

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
    } else {
        document.getElementById('categoriaTitle').innerText = 'Comentários';
        document.getElementById('comentarios').innerText = 'Selecione uma categoria acima para ver os comentários.';
    }
});

// Script para lidar com o formulário de postagem
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let conteudo = document.getElementById('conteudo').value;

    if (conteudo) {
        let urlParams = new URLSearchParams(window.location.search);
        let categoria = urlParams.get('categoria');
        let comentarios = JSON.parse(localStorage.getItem(`${categoria}_comentarios`)) || [];
        comentarios.push(conteudo);
        localStorage.setItem(`${categoria}_comentarios`, JSON.stringify(comentarios));

        document.getElementById('response').innerText = 'Mensagem publicada com sucesso!';
        document.getElementById('conteudo').value = '';
    } else {
        document.getElementById('response').innerText = 'Erro ao publicar a mensagem.';
    }
});


