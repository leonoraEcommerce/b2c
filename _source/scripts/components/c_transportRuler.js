{
    const transportRuler__promotionInfos = {
        active: true,
        minPrice: 249.90,
        cepRanges: [
            {init: "80000000", end: "87999999"},
            {init: "88000000", end: "89999999"},
            {init: "90000000", end: "99999999"},
            {init: "01000000", end: "19999999"},
            {init: "20000000", end: "28999999"},
            {init: "29000000", end: "29999999"},
            {init: "30000000", end: "39999999"}
        ]
    }

    function getCartFinalPrice() {
        let finalPrice = $('.minicart-resume__total-price-target')
            .text()
            .toLowerCase()
            .replace('r$ ', '');
        return parseFloat(finalPrice);

    }
    function getPercentualDiff(x,y) {
        return Math.floor(((y / x) * 100));
    }
    function setPercentualBar(w) {
        let pw = w + '%';
        transportRuler__el.find('.c-transportRuler__percent').width(pw)
    }
    function setWarns() {
        $('.js-transportRuler__minPrice')
            .text(transportRuler__promotionInfos.minPrice
                .toFixed(2)
                .replace('.', ','))
    }

    function initRuler() {
        // show ruler
        transportRuler__el.removeClass('u-dnone');
        // change percent bar
        setPercentualBar(transportRuler__percentualDiff)
        setWarns()
        // change percentual caption
        if (transportRuler__percentualDiff > 100) {
            $('.js-transportRuler__percentCaption').text('100%');
        } else {
            $('.js-transportRuler__percentCaption').text(transportRuler__percentualDiff.toFixed(0) + '%');
        }
    }
    function refreshRuler() {
        let finalCartPrice = getCartFinalPrice();
        let percentDiff = getPercentualDiff(transportRuler__promotionInfos.minPrice, finalCartPrice);
        setPercentualBar(percentDiff);
        if (percentDiff > 100) {
            $('.js-transportRuler__percentCaption').text('100%');
        } else {
            $('.js-transportRuler__percentCaption').text(percentDiff.toFixed(0) + '%');
        }
    }

    function getCoordinates() {
        navigator.geolocation.getCurrentPosition(function (position) {
            var url = "https://nominatim.openstreetmap.org/reverse?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&format=json&json_callback=transportRuler";
            var script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        });
    }
    function transportRuler(data) {
        let cep = Number(data.address.postcode.replace('-', ''));
        console.log(cep)
        transportRuler__promotionInfos.cepRanges.forEach((range) => {
            let thisRangeInit = Number(range.init);
            let thisRangeEnd = Number(range.end);
            if ((cep >= thisRangeInit) && (cep <= thisRangeEnd)) {
                initRuler();
            }
        });
    }

    const transportRuler__el = $('.c-transportRuler');
    const transportRuler__finalPrice = getCartFinalPrice();
    const transportRuler__percentualDiff = getPercentualDiff(transportRuler__promotionInfos.minPrice, transportRuler__finalPrice);

    $(window).on('load', function() {
        // if (window.location.pathname === '/z-laures-tests') {
            if (transportRuler__promotionInfos.active) {
                getCoordinates();
            } else {
                transportRuler__el.remove();
            }
        // }
    });
    $(document).on('click', function(e) {
        // if (window.location.pathname === '/z-laures-tests') {
            if ((transportRuler__el.length) && (transportRuler__promotionInfos.active)) {
                refreshRuler();
            }
        // }
    });
    $('.minicart-control').on('click', function() {
        if ((transportRuler__el.length) && (transportRuler__promotionInfos.active)) {
            setTimeout(() => {refreshRuler()}, 2000);
            setTimeout(() => {refreshRuler()}, 2500);
            setTimeout(() => {refreshRuler()}, 3000);
        }
    })

    function setIntervalMinicartRefresh() {
        if ($('.minicart').hasClass('minicart--open')) {
            refreshRuler();
        }
    }
    setInterval(setIntervalMinicartRefresh, 1500);
}
