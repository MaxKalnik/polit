$(document).ready(function () {
    var body = $('body');
    var galEl;
    var elIndex;

    body.on('click', '.mobile-only-show', function(event){
        event.preventDefault();
        body.append($('.map-container'));
        $('.map-container').addClass('show');
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

    body.on('click', '.map-img', function(event){
        event.preventDefault();
        galEl = event.target.id;
        elIndex = galEl%2;
        if (galEl == 0 || galEl == 1) {
            openPhotoSwipe(items1, elIndex);
        }

        else if (galEl == 2 || galEl == 3) {
            openPhotoSwipe(items2, elIndex);
        }

        else if (galEl == 4 || galEl == 5) {
            openPhotoSwipe(items3, elIndex);
        };

        return false

    });

    body.on('click', '.mobile-only-close', function(event){
        event.preventDefault();
        $('.blur').removeClass('show');
        $('.popup').removeClass('show');
        $('.text-box--map').append($('.map-container'));
        $('.map-img--big').css('transform', 'scale(1)');

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