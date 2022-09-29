$(document).ready(function(){
    // shelves
    $('.js-s-letron__slickShelve .main-shelf > h2').remove();

    $('.js-s-letron__slickShelve .main-shelf').slick({
        arrows: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // videos
    $('.js-s-letron__videos').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // header
    $('.js-l-headerLetron__slickProducts').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    });

    // cta
    $('.js-linkScroll').on('click', function(e) {
        e.preventDefault();
        let finalDestiny = $(this).attr('href');
        goToSection__scroll(finalDestiny, 200, 200, 700, 10);
    });
});