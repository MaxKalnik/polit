var items1 = [
    {
        src: 'images/maps/estimated-2016.png',
        srcset: 'images/maps/estimated-2016@2x.png 2x',
        w: 1638,
        h: 708
    },
    {
        src: 'images/maps/actual-2016.png',
        srcset: 'images/maps/actual-2016@2x.png 2x',
        w: 1638,
        h: 708
    }
];

var items2 = [
    {
        src: 'images/maps/estimated-2012.png',
        srcset: 'images/maps/estimated-2012@2x.png 2x',
        w: 1638,
        h: 708
    },
    {
        src: 'images/maps/actual-2012.png',
        srcset: 'images/maps/actual-2012@2x.png 2x',
        w: 1638,
        h: 708
    }
];

var items3 = [
    {
        src: 'images/maps/vote-predicted.png',
        srcset: 'images/maps/vote-predicted@2x.png 2x',
        w: 1638,
        h: 708
    },
    {
        src: 'images/maps/vote-actual.png',
        srcset: 'images/maps/vote-actual@2x.png 2x',
        w: 1638,
        h: 708
    }
];

var openPhotoSwipe = function(items, elIndex) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var items = items;

    var options = {

        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0,

        index: elIndex

    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};



