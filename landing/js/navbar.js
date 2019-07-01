$(document).ready(function() {
    $(window).scroll(function () {

        console.log($(window).scrollTop());

        if ($(window).scrollTop() > 100) {
            $('#navbar').addClass('navbar-fixed-top');
        }

        if ($(window).scrollTop() < 101) {
            $('#navbar').removeClass('navbar-fixed-top');
        }
    });
});



    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
//     $(function () {
//        $(".top-menu-wrap").click(function () {
//            $(".top-menu").css("display", "block");
//     })
//     });