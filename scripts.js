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

                // Adiciona a imagem ao comentário, se existir
                if (comentario.imagem) {
                    let imagem = document.createElement('img');
                    imagem.src = comentario.imagem;
                    imagem.className = 'comentario-imagem';
                    comentarioDiv.appendChild(imagem);
                }

                // Adiciona o conteúdo do comentário
                let conteudo = document.createElement('p');
                conteudo.innerText = comentario.conteudo;
                comentarioDiv.appendChild(conteudo);

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
