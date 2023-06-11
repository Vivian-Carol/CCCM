var multipleItemCarousel = document.querySelector('#carouselExampleControls');


if(window.matchMedia("(min-width:576px)").matches){

    var carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
      })

    var carouselwidth = $('.carousel-inner')[0].scrollwidth;
    var cardWidth = $('.carousel-item').width();

    var scrollPosition = 0;

    $('.carousel-control-next').on('click', function(){
        if(scrollPosition < (carouselwidth - (cardWidth * 4))){
            console.log('next');
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner').animate({scrollLeft: scrollPosition},200);
        }
    });

    $('.carousel-control-next').on('click', function(){
        if(scrollPosition > 0){
            console.log('prev');
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner').animate({scrollLeft: scrollPosition},200);
        }
    });
} else{
    $(multipleItemCarousel).addClass('slide');
}

