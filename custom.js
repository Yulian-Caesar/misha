$(document).ready(function(){
    $("#menu, #sidebar__menu").on("click", ".menu__link, .sidebar__menu-link", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$(".toggle-popup").on('click', function() {
    $("#popup").toggleClass('open');
}); 

$(".menu-toggle, .sidebar__close-button, .sidebar__menu-link").on('click', function() {
    $("#sidebar").toggleClass('open');
}); 