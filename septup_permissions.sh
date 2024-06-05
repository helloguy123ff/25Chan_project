#!/bin/bash

# Cria o arquivo postagens.txt se não existir
touch postagens.txt

# Define permissões de leitura e escrita para todos os usuários
chmod 666 postagens.txt

# Confirmação
echo "Permissões configuradas para postagens.txt"
chmod +x setup_permissions.sh
./setup_permissions.sh
php -S localhost : 8000
python -m http.server 8000
