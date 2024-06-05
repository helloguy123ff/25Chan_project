<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>25Chan - Comentários</title>
    <style>
        body {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            background-image: linear-gradient(45deg, rgb(223, 223, 223), rgb(255, 255, 255));
            color: #000;
            padding: 20px;
        }

        .comentario {
            background-color: rgba(0, 0, 0, 0.8);
            padding: 20px;
            margin: 10px 0;
            border-radius: 10px;
            color: #fff;
        }

        a {
            color: white;
        }
    </style>
</head>
<body>
    <h1>Comentários</h1>
    <a href="index.html">Voltar para Postagem</a>
    <div>
        <?php
        $file = 'postagens.txt';
        if (file_exists($file)) {
            $comentarios = file($file, FILE_IGNORE_NEW_LINES);
            foreach ($comentarios as $comentario) {
                echo "<div class='comentario'>" . htmlspecialchars($comentario) . "</div>";
            }
        } else {
            echo "<p>Nenhum comentário encontrado.</p>";
        }
        ?>
    </div>
</body>
</html>

