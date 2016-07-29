/* Active Class Toggle Sidebar Primary Navigation */

$(document).ready(function(){
    $('.nav-title > a').on('click', function(){
        $('.nav-title > a').removeClass('active');
        $(this).addClass('active');    
    });  
});    

