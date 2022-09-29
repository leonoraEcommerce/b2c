{
    function checkBottomAnimation() {
        if ($('.e-product-bar').length) {
            if ($('.e-product-bar').hasClass('e-hide-bar')) {
                $('.c-animationCarnaval').removeClass('js-productBarActive');
            } else {
                $('.c-animationCarnaval').addClass('js-productBarActive');
            }
        } else {
            $('.c-animationCarnaval').removeClass('js-productBarActive');
        }
    }
    $(window).on('scroll load', function() {
       checkBottomAnimation();
    });
}
