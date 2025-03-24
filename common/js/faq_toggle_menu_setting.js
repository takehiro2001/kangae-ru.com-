$(document).ready(function(){
    $('dt').click(function(){
        $(this).next('dd').stop(true, true).slideToggle();
    });
});