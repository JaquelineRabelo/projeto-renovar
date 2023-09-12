<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    $to = "jaqueline.raabelo@hotmail.com";
    $subject = "Nova mensagem de contato de $nome";
    $message = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";

    // Você pode adicionar cabeçalhos adicionais, como 'From', 'Reply-To', etc., aqui

    // Envia o email
    if (mail($to, $subject, $message)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
}
?>
