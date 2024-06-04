 document.getElementById('postForm').addEventListener('submit', function(event) {
            event.preventDefault();
            let conteudo = document.getElementById('conteudo').value;

            fetch('processar_postagem.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ conteudo: conteudo })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('response').innerText = data.message;
                document.getElementById('conteudo').value = '';
            })
            .catch(error => {
                document.getElementById('response').innerText = 'Erro ao publicar a mensagem.';
                console.error('Error:', error);
            });
        });
