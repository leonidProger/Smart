$(document).ready(function () {
    let headerIndex = 1;
    setInterval(function () {
        let bgITem = $('.header-bg-item');
        if(headerIndex >= bgITem.length){
            headerIndex=0;
        }
        bgITem.removeClass('active');
        bgITem.eq(headerIndex++).addClass('active');
    },4000);
    $( '.swipebox' ).swipebox();
});
$('.services .tab-link').click(function () {
    $('.service-images .img-item').hide().eq($(this).index()%2).show().addClass('animated fadeInRight');
    $('.service').hide().eq($(this).index()).show().addClass('animated fadeInDown');
});


    $(document).ready(function(){

        $(window).scroll(function(){
            if ($(this).scrollTop() > 3500) {
                $('.top-scr').fadeIn();
            } else {
                $('.top-scr').fadeOut();
            }
        });

        $('.top-scr').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1500);
            return false;
        });

    });
