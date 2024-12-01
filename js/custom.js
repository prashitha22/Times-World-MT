$(document).ready(function () {
    // Initialize the carousel with a 2-second interval
    $('#textCarousel').carousel({
        interval: 2000 // Auto-slide every 2 seconds
    });

    $('#cardCarousel').carousel({
        interval: 3000, // Auto-slide every 3 seconds
       loop: true
    });

    
});