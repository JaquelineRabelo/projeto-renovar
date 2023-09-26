

/*menu hamburgue*/
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


/*adicionar ao carrinho*/
const carrinhoLista = document.getElementById('carrinho-lista');
const totalSpan = document.getElementById('total');
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    const listItem = document.createElement('li');
    listItem.textContent = `${nome} - R$${preco.toFixed(2)}`;
    carrinhoLista.appendChild(listItem);
    total += preco;
    totalSpan.textContent = `R$${total.toFixed(2)}`;
}