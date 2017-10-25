/**
 * Created by sergeybytchok on 2/24/17.
 */
$(document).ready(function () {
    var body = $('body');

    body.on('click', '.accordion-head__item', function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        topr = $(id).offset().top - 40;
        $('body,html').animate({scrollTop: topr}, 1500);

    });

    body.on('click', '.show-table', function(event){
        event.preventDefault();
        body.append($('.ranking-table'));
        $('.ranking-table').addClass('show');
        body.scrollTop(0);
        $('.page__wrap').hide();

        return false

    });

    body.on('click', '.mobile-only-close', function (event) {
        event.preventDefault();
        $('.ranking-table').removeClass('show');
        $('.js-before_table').after($('.ranking-table'));
        $('.page__wrap').show();
        $('html, body').animate({ scrollTop: $('.ranking-table').position().top }, 500);
        return false

    });

    body.on('click', '.hint', function () {
        $(this).hide();
        return false
    }) ;
    body.on('click', '.table_show__link', function () {
        $(".article-table").removeClass('table-short');
        return false
    })

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