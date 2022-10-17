$(document).ready(function() {
    var currentSection = 0;
    $('#isikonten').hide();
    $('ul li a').click(function() {

        $('ul li a').removeClass('active');
        $(this).addClass('active');

        var href = $(this).attr('href');
        $('#didalamkonten>div').hide();

        $(href).show();

        if(currentSection == 0){
            $('#isikonten').slideToggle();
            currentSection = href;
        }else if(currentSection == href){
            $('#isikonten').slideToggle();
            currentSection = 0;
        }else{
            currentSection = href;
        }
        return false;
    });
});