$(document).ready(function() {
    lightGallery(document.getElementById('video-gallery'), {
        selector: '.gallery-img-container',
        plugins: [lgVideo, lgThumbnail, lgFullscreen],
        youTubePlayerParams: {
            controls: 1,
            mute: 0,
            autoplay: 1
        }
    });

    lightGallery(document.getElementById('video-gallery-presentation'), {
        selector: '.gallery-img-container',
        plugins: [lgVideo, lgThumbnail, lgFullscreen],
        youTubePlayerParams: {
            controls: 1,
            mute: 0,
            autoplay: 1
        }
    });

    lightGallery(document.getElementById('video-gallery-featured-students'), {
        selector: '.gallery-img-container',
        plugins: [lgVideo, lgThumbnail, lgFullscreen],
        youTubePlayerParams: {
            controls: 1,
            mute: 0,
            autoplay: 1
        }
    });

    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                720: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    });
    
});