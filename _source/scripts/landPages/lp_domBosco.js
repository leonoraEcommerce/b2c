{
    // ultimo btn de todos os produtos muda
    $('.js-showMoreProducts').on('click', function() {
        if($('.l-landPage').hasClass('--domBosco')) {
            if ($('.js-allProducts').hasClass('is-active')) {
                $('.main-shelf.is-active').find('ul').each(function() {
                    if ($(this).hasClass('is-active')) {
                        $('.js-btnAllProducts').removeClass('u-dnone')
                    } else {
                        $('.js-btnAllProducts').addClass('u-dnone')
                    }
                });
            }
        }
    });

    // vitrines recebem comportamento de scroll page
    const elementVitrines = $('.l-landPage__features a');
    elementVitrines.on('click', function(e) {
        e.preventDefault();

        // scroll link
        let finalDestiny = '#colecoes';
        goToSection__scroll(finalDestiny, 100, 100, 700, 10);

        // get coleção
        let thisCollection = $(this).attr('href');

        // desativa todas as colecoes
        $('.js-goToCollection').removeClass('is-active');
        let thisCollectionButton = $('.js-goToCollection[href='+thisCollection+']')
        thisCollectionButton.addClass('is-active');
        thisCollectionButton.click();
    })
}
