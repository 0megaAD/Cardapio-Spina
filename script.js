// Função para mostrar o formulário
document.getElementById("botaoForm").onclick = function() {
    var formulario = document.getElementById("formularioPedido");
    if (formulario.style.display === "none") {
        formulario.style.display = "block";
    } else {
        formulario.style.display = "none";
    }
}

// Garantir que o formulário comece oculto ao carregar a página
window.onload = function() {
    var formulario = document.getElementById("formularioPedido");
    formulario.style.display = "none"; // Garante que o formulário esteja oculto
};
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    // Aqui você pode enviar os dados para um servidor ou processá-los conforme necessário
    // Para este exemplo, apenas exibiremos uma mensagem de confirmação
    
    const responseMessage = `Pedido enviado com sucesso! Nome: ${name}, Email: ${email}, Item: ${item}, Quantidade: ${quantity}`;
    document.getElementById('responseMessage').textContent = responseMessage;
});