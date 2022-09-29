{
    function fixPercentFlags() {
        $(".shelf-item").each(function(index) {
            let shelfItem__ListPrice = $(this).find('.shelf-item__list-price');
            let shelfItem__BestPrice = $(this).find('.shelf-item__best-price');
            let shelfItem__FlagPercent = $(this).find('.flag-percentage--active');

            // corrige a % de desconto que aparece na flag
            if (shelfItem__ListPrice.length) {
                // get values
                let priceList = parseFloat(shelfItem__ListPrice.text().replace(',', '.').split('R$ ')[1]);
                let priceBest = parseFloat(shelfItem__BestPrice.text().replace(',', '.').split('R$ ')[1]);
                let priceDiff = priceList - priceBest;
                let percentDiff = (100 * priceDiff) / priceList
                let percentFlag = percentDiff.toFixed(0);
                //let percentFlag = Math.floor((100 * priceDiff) / priceList);

                // set values
                shelfItem__FlagPercent.html(percentFlag + '% <br> OFF');
            }

            // faz as tags com 0% desaparecerem
            if (shelfItem__FlagPercent.html() === '0%<br>OFF') {
                shelfItem__FlagPercent.hide();
                shelfItem__FlagPercent.closest('.shelf-item').addClass('flag-zero-percent');
                shelfItem__FlagPercent.addClass('js-is-hide');
            } else {
                shelfItem__FlagPercent.closest('.shelf-item').addClass('flag-with-percent');
            }
        });
    }

    $(document).on('click', function() {
        fixPercentFlags();
    });

    $(window).on('load', function() {
        setTimeout(() => {fixPercentFlags();}, 1500);
        fixPercentFlags();
    })
}
