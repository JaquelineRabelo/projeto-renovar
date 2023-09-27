

/*menu hamburgue*/
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


/*adicionar ao carrinho*/
// Definir uma variável para armazenar o total do carrinho
function calcularTotalCarrinho() {

    function calcularTotalCarrinho() {

        // Definir uma variável para armazenar o total do carrinho
        let total = 0;
      
        // Obter todos os produtos no carrinho
        let produtos = $(".item");
      
        // Iterar sobre todos os produtos
        produtos.each(function() {
      
          // Obter o valor do produto
          let valor = $(this).find(".valor").text();
      
          // Adicionar o valor do produto ao total
          total += parseFloat(valor);
        });
      
        // Atualizar o valor do total no ícone do carrinho
        $("#icone-carrinho").text(total);
      }
      
      $(".adicionar-ao-carrinho").click(calcularTotalCarrinho);
      }
  