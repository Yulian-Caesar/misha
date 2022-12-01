$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$("header").removeClass("fixed");
var introHeight = $(".home").height()
$(window).scroll(function(){
    if ($(this).scrollTop() > introHeight) {
    $("header").addClass("fixed");
    } else {
    $("header").removeClass("fixed");
    };
});