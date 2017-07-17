$(document).ready(function (){
            $("#survey-link").click(function (){
                $('html, body').animate({
                    scrollTop: $("#page2").offset().top
                }, 700);
            });
});