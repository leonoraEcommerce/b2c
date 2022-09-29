{
    // sliders
    $('.js-slickFeaturedCategories').slick({
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 2,
        arrows: true,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    dots: true
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 510,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
        ]
    });

    // captions
    $('.s-sliderFeaturedCategories .box-banner img').each(function() {
        let thisCaption = $(this).attr('alt');
        $(this).closest('a').append('<span>'+thisCaption+'</span>');
    });
}
