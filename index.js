var color = 1;
$('.btn-theme').click(function() {
    if (color === 1) {
        $('#container').css("background", "#f5f6f7");
        $('#calculator').css("color", "#272727");
        $('.fa-moon').css("color", "#272727");
        $('.fa-bars').css("color", "#272727");
        $('.upperValue').css("color", "#272727");
        $('.lowerValue').css("color", "#272727");
        $('.number').css("color", "#363636");
        $('.top-section,.side-section').css("background", "#f5f6f7");
        $('.operator').css("background-color", "#f5f6f7");
        $('.equal').css("background-color", "#FF6A00");
        $('.number').css("background-color", "#f5f6f7");
        $('body').css("background", "#f5f6f7");
        $('#container').css("box-shadow", "-4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #DFE4EA");
        $('side-section').css("background", "#f5f6f7");
        color = 0;
    } else {
        $('#container').css("background", "linear-gradient(to top, #000000, #434343)");
        $('#calculator').css("color", "aliceblue");
        $('.fa-moon').css("color", "#FF6A00");
        $('.fa-bars').css("color", "#f0f0f0");
        $('.upperValue').css("color", "#ffffff");
        $('.lowerValue').css("color", "#ffffff");
        $('.number').css("color", "#ffffff");
        $('.top-section,.side-section').css("background", "#131419");
        $('.operator').css("background-color", "#101115");
        $('.equal').css("background-color", "#FF6A00");
        $('.number').css("background-color", "#101115");
        $('body').css("background", "#131419");
        $('#container').css("box-shadow", "-3px -3px 10px rgba(255, 255, 255, .05), 3px 3px 15px rgba(0, 0, 0, .5)");
        color = 1;
    }
});
