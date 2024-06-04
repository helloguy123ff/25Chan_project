touch postagens.txt
chmod 666 postagens.txt
curl -X POST http://seusite.com/processar_postagem.php -H "Content-Type: application/json" -d '{"conteudo":"Teste de mensagem"}'
chmod +x setup_permissions.sh
./setup_permissions.sh
ls -l postagens.txt
-rw-rw-rw- 1 usuario grupo tamanho data postagens.txt
php -S localhost: 8000
python -m http.server 8000
