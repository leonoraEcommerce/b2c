// este JS age diretamente no elemento fixo (e-product-bar) da página de produto - é a barra verde/branco que mostra
// o botão de compra quando o scrollDown é efetuado.
// Quando o produto está indisponivel essa barra mostra o preço de R$ 9.999.876,00, o script corrige este problema.
{
    //console.log('leonora_fix_pageProduct__e-product-bar.js 1149 ');
    setTimeout(() => {
        const element_ba_productQtf = document.querySelector('.product-buy-qtd');
        const element_ba_fixedElement = document.querySelector('.e-product-bar');
        if (element_ba_fixedElement) {
            let thisAttr = element_ba_productQtf.getAttribute('style');
            if (thisAttr === 'display: none;') {
                element_ba_fixedElement.classList.add('e-hide-bar')
                element_ba_fixedElement.remove();
            }
        }
    }, 600);
}
