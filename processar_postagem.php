<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Lê a entrada JSON enviada pelo JavaScript
$data = json_decode(file_get_contents("php://input"), true);

// Verifica se o conteúdo foi fornecido
if (isset($data['conteudo'])) {
    $conteudo = $data['conteudo'];

    // Salva o conteúdo em um arquivo
    if (file_put_contents('postagens.txt', $conteudo . PHP_EOL, FILE_APPEND | LOCK_EX)) {
        echo json_encode(['status' => 'success', 'message' => 'Mensagem publicada com sucesso!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Erro ao salvar a mensagem.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Conteúdo não fornecido.']);
}
?>
