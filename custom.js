$(".toggle-popup").on('click', function() {
    $("#popup").toggleClass('open');
}); 

$(".menu-toggle, .sidebar__close-button, .sidebar__menu-link").on('click', function() {
    $("#sidebar").toggleClass('open');
}); 