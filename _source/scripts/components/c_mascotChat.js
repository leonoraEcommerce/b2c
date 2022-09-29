{
    let mascotChat = $('.c-mascotChat');

    function minimizeMascotChat() {
        mascotChat.children('.c-mascotChat__monkey').hide('fast');
        mascotChat.children('.c-mascotChat__close').hide('fast');
        mascotChat.children('.c-mascotChat__talk').hide('fast');
        mascotChat.children('.c-mascotChat__posCTA').show('fast');
    }

    $(window).on('load', function() {
        mascotChat.addClass('step--1');

        // first chat
        setTimeout(() => {
            mascotChat.addClass('step--2');
        }, 500);

        // inner chats
        setTimeout(() => {
            mascotChat.addClass('step--3');
        }, 1500);

        // cta show
        setTimeout(() => {
            mascotChat.addClass('step--4');
        }, 3500);

        // show btn close
        setTimeout(() => {
            mascotChat.addClass('step--5');
        }, 5000);

        // hidden
        setTimeout(() => {
            minimizeMascotChat();
        }, 50000);
    });

    $('.js-closeMascotChat').on('click', function() {
        minimizeMascotChat();
    });

    if (!$('body').hasClass('home')) {
        mascotChat.addClass('is-minified');
    } else {
        mascotChat.removeClass('is-minified');
    }
}
