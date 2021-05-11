//Slick Carousel (TECH)
$('.tech .responsive').slick({
    arrows: true,   
    dots: false,                      //?????
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 3000,
    //infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1024,
        settings: {
            arrows: true,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
        }
    },
    {
        breakpoint: 600,
        settings: {
            arrows: false,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 350,
        settings: {
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
    ]
});

//Slick Carousel (SECURITY)
$('.security .responsive').slick({
    arrows: true,   
    dots: false,                      //?????
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 2500,
    //infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
            arrows: true,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        }
    },
    {
        breakpoint: 600,
        settings: {
            arrows: false,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 350,
        settings: {
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
    ]
});

//Slick Carousel (FAVOURITE)
$('.favourite .responsive').slick({
    arrows: false,   
    dots: false,                      //?????
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 2000,
    //infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [{
        breakpoint: 1024,
        settings: {
            arrows: false,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
        }
    },
    {
        breakpoint: 600,
        settings: {
            arrows: false,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3,
        }
    },
    {
        breakpoint: 350,
        settings: {
            arrows: false,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    }
    ]
});