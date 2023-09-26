

/*menu hamburgue*/
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


/*adicionar ao carrinho*/
 // Variáveis para manter o carrinho de compras e o total
 const carrinho = [];
 let total = 0;

 // Função para adicionar um produto ao carrinho
 function adicionarAoCarrinho(nomeProduto, precoProduto) {
     carrinho.push({ nome: nomeProduto, preco: precoProduto });
     total += precoProduto;
     atualizarCarrinho();
 }

 // Função para atualizar o valor total na div
 function atualizarCarrinho() {
     const totalElement = document.getElementById("total");
     totalElement.textContent = total.toFixed(2); // Formata o valor com duas casas decimais
 }


