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
});