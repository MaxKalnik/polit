var items = [
    {
        src: 'images/photo/map-big.png',
        srcset: 'images/photo/map-big@2x.png 2x',
        w: 3000,
        h: 1425
    },
    {
        src: 'images/photo/map.png',
        srcset: 'images/photo/map@2x.png 2x',
        w: 1078,
        h: 465
    }
];

var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'images/photo/map-big.png',
            srcset: 'images/photo/map-big@2x.png 2x',
            w: 3000,
            h: 1425
        },
        {
            src: 'images/photo/map.png',
            srcset: 'images/photo/map@2x.png 2x',
            w: 1078,
            h: 465
        }
    ];

    // define options (if needed)
    var options = {

        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

openPhotoSwipe();