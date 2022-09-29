{
    function changeBg(img) {
        $('body').addClass('laures__headerSearch');
        $('.search-banner').append('<img src="arquivos/' + img + '"/>');
        $('.search-result.tituloColecao').remove();
        setTimeout(() => {$('.search-result.tituloColecao').remove();}, 500);
    }

    // mudar banner soul garden & positive vibes
    $(window).on('load', function() {
        if ($('body').hasClass('search')) {
            let category = $('.search-result.tituloColecao').text().toLowerCase();
            console.log('1 search-banner.js => ' + category);
            if (category === 'soul-garden') {
                changeBg('banner_bgSearchHeader_soulGarden.jpg');
            } else if (category === 'positive-vibes') {
                changeBg('b2c_banner_positive-vibes.jpg');
            } else if (category === 'new-office') {
                changeBg('b2c_banner_new-office.jpg');
            } else if (category === 'promocao-good-vibes') {
                changeBg('b2c_banner_goodVibes.jpg');
            }
        }
    })
}
