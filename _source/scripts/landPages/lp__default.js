{
    // banners
    $('.l-landPage__banner').each(function() {
        let childrens = 0;
        $(this).children('.box-banner').each(function(index) {
            childrens = index;
        });
        if (childrens > 0) {
            $(this).slick({
                arrows: false,
                dots: true
            });
        }
    });

    // links scroll
    $('.js-goToSection').on('click', function(e) {
        e.preventDefault();
        let finalDestiny = $(this).attr('href');
        goToSection__scroll(finalDestiny, 100, 100, 700, 10);
    })

    // collections
    const mainShelf = $('.l-landPage__collections__content .main-shelf');
    function activeFirst() {
        mainShelf.each(function(index) {
            if (index === 0) {
                $(this).addClass('is-active');
            }
        });
    }
    function showFirstsCards(cardsInit) {
        mainShelf.each(function(index) {
            if ($(this).hasClass('is-active')) {
                $(this).children('ul').each(function(index) {
                    if (index < cardsInit) {
                        $(this).addClass('is-active');
                    }
                })
            }
        });
    }
    function showMoreCards(cardsPerClick) {
        let element = $('.l-landPage__collections__content .main-shelf.is-active ul:not(.is-active)');
        element.each(function(index) {
            if (index < cardsPerClick) {
                $(this).addClass('is-active');
            }
        });
    }
    function toggleGrid(strToCompare) {
        $('.l-landPage__collections .main-shelf > h2').each(function() {
            let thisText = $(this).text();
            console.log(thisText);
            if (thisText === strToCompare) {
                $(this).closest('.main-shelf').addClass('is-active');
            }
        })
    }
    function toggleBtnMoreView(element_ul) {
        let check = 0;
        let elQtf = element_ul.length;

        element_ul.each(function() {
            if ($(this).hasClass('is-active')) {
                check = check + 1;
            }
        });

        if ((elQtf === 8) || (elQtf === check)) {
            $('.js-showMoreProducts').hide();
        } else {
            $('.js-showMoreProducts').show();
        }
    }

    activeFirst();
    showFirstsCards(8);

    $('.js-showMoreProducts').on('click', function(e) {
       e.preventDefault();
        showMoreCards(8);
        toggleBtnMoreView($(this).closest('.l-landPage__collections__content').find('.main-shelf.is-active').find('ul'));
    });
    $('.js-goToCollection').on('click', function(e) {
        e.preventDefault();

        // toggle btn style
        $('.js-goToCollection').removeClass('is-active');
        $(this).addClass('is-active');

        // get category
        let thisCategory = $(this).attr('href').split('#')[1];
        console.log(thisCategory);

        // change grid
        mainShelf.removeClass('is-active');
        toggleGrid(thisCategory);

        // toggle cards
        mainShelf.children('ul').removeClass('is-active');
        showFirstsCards(8);

        // show load more
        toggleBtnMoreView($(this).closest('.l-landPage__collections__hero').find('.main-shelf.is-active').find('ul'));
    });
}
