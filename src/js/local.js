/**
 * Created by sergeybytchok on 2/24/17.
 */
$(document).ready(function () {
    var body = $('body');

    body.on('click', '.js-table', function(event){
        event.preventDefault();
        body.append($('.map-container'));
        $('.map-container').addClass('show');
        body.scrollTop(0);
        $('.page__wrap').hide();

        return false

    });

    body.on('click', '.mobile-only-close', function (event) {
        event.preventDefault();
        $('.map-container').removeClass('show');
        $('.js-before-table').after($('.map-container'));
        $('.page__wrap').show();
        $('html, body').animate({ scrollTop: $('.map-container').position().top }, 500);
        return false

    });

    function topMenu() {
        if ($(window).width() < 959) {

            body.on('click', '.top-menu__link.active', function () {
                $(this).parents('.top-menu__wrap').toggleClass('open');
                return false
            });

            /*$('.top-menu__wrap.open').on('click', function(){
             $('.top-menu__wrap').removeClass('open');
             return false
             })*/
        }

    }

    topMenu();
    $(window).on('resize', function () {
        topMenu();
    });


});