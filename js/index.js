$(document).ready(function() {

    function initializeGallery(galleryId) {
        lightGallery(document.getElementById(galleryId), {
            selector: '.gallery-img-container',
            plugins: [lgVideo, lgThumbnail, lgFullscreen],
            youTubePlayerParams: {
                controls: 1,
                mute: 0,
                autoplay: 1
            }
        });
    }

    initializeGallery('video-gallery')
    initializeGallery('video-gallery-presentation')
    initializeGallery('video-gallery-featured-students')


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
    
    $(".nav-link").on('click', function(event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 100);
    });

    $('#toggleButton').on('click', function() {
        const slicedCols = $('#faculty .row .col').slice(4, 24);
        slicedCols.toggleClass('d-none');
    
        if (slicedCols.hasClass('d-none')) {
            $('#toggleButton').html('More <i class="ms-1 bi bi-chevron-down"></i>');
        } else {
            $('#toggleButton').html('Less <i class="ms-1 bi bi-chevron-up"></i>');
        }
    });
       
    
});