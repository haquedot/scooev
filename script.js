$(document).ready(function () {
    $('.b2bCarousel').owlCarousel({
        loop: true,
        // margin: 10,
        // nav: true,
        dots: false,
        responsive: {
            // 0: { items: 1 },
            // 600: { items: 2 },
            // 1000: { items: 4 }
        }
    });
});

$(document).ready(function () {
    $('.riderCarousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });
});

$(document).ready(function () {
    $('.testimonialCarousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
