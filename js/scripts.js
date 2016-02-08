jQuery(document).ready(function($){
    $('#contact-me').on('click', function(){
        $('.dot-m-contact').fadeIn(600);
        $('#sound-cloud').fadeOut(600);
    });
    $('.sound-cloud-playlist').on('click', function(){
        $('.dot-m-contact').fadeOut(600);
        $('#sound-cloud').fadeIn(600);
    });
    
    
});