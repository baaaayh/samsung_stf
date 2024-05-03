$(function () {
    $('.gnb__list > li').hover(function () {
        $(this).toggleClass('active');
        $(this).siblings('li').removeClass('active');
        $('.depth2').stop().slideToggle();
    });

    $('.family-site button').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('ul').slideToggle();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).parents().hasClass('family-site')) {
            $('.family-site button').removeClass('active');
            $('.family-site ul').slideUp();
        }
    });
});
