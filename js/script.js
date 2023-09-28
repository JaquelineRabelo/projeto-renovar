

/*menu hamburgue*/
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


/*adicionar ao carrinho*/
const botoesCarrinho = document.querySelectorAll('.adicionar-ao-carrinho');
const totalElement = document.getElementById('total');
const itensCarrinhoElement = document.getElementById('itens-carrinho');
let total = 0;

botoesCarrinho.forEach(botao => {
    botao.addEventListener('click', () => {
        const preco = parseFloat(botao.getAttribute('data-preco'));
        total += preco;

        const itemCarrinho = document.createElement('li');
        itemCarrinho.textContent = `${botao.parentElement.querySelector('h3').textContent} - R$ ${preco.toFixed(2)}`;
        itensCarrinhoElement.appendChild(itemCarrinho);

        totalElement.textContent = total.toFixed(2);
    });
});

