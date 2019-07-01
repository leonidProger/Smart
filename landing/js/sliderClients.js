$(document).ready(function(){
    $('.associates').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,


                }
            },
            {
                breakpoint: 747,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                }
            }
        ]


    });
});


$(document).ready(function(){
    $('.reviews-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<a href="#" class="clients-prev" onclick="plusSlides(-1)">&#10094;</a>',
        nextArrow: '<a href="#" class="clients-next" onclick="plusSlides(1)">&#10095;</a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },

            ]


});
});


$('.partners').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    // slide: '.partner',
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

