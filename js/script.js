$(document).ready(function() {
    // Change font size
    $('#fontSize').on('input', function() {
        $('body').css('font-size', $(this).val() + 'px');
    });

    // Change background color
    $('#backgroundColor').on('input', function() {
        $('body').css('background-color', $(this).val());
    });
});
