
$("header").removeClass("fixed");
var introHeight = $(".home").height()
$(window).scroll(function(){
    if ($(this).scrollTop() > introHeight) {
    $("header").addClass("fixed");
    } else {
    $("header").removeClass("fixed");
    };
});

$(".toggle-popup").on('click', function() {
    $("#popup").toggleClass('open');
}); 

$(".menu-toggle, .sidebar__close-button, .sidebar__menu-link").on('click', function() {
    $("#sidebar").toggleClass('open');
}); 