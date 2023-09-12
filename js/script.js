let carrinho = []; // Array para armazenar os produtos no carrinho

function addToCart(produto, preco) {
  carrinho.push({ nome: produto, preco: preco });
  alert(`"${produto}" foi adicionado ao carrinho.`);
}

function redirectToCart() {
  // Salvar o carrinho no Local Storage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Redirecionar para a página do carrinho
  window.location.href = 'carrinho.html';
}


$(document).ready(function () {
  // Quando o botão do menu hamburguer for clicado
  $('.navbar-toggler').click(function () {
    // Adicione a classe "open" ao elemento com a classe "fullscreen-menu"
    $('.fullscreen-menu').toggleClass('open');
  });
});