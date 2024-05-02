$(function () {
    let totalSlides = $('.main-kv__slide').length,
        fTotalSlides = $('.main-kv__slide').length;
    let currentSlide;
    let fCurrentSlide;

    $('.main-kv__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        nextArrow: '.main-kv__button--next',
        prevArrow: '.main-kv__button--prev',
    });

    currentSlide = $('.main-kv__slider').slick('slickCurrentSlide');
    updateProgress(currentSlide);

    $('.main-kv__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        updateProgress(nextSlide);
    });

    function updateProgress(nextSlide = 0) {
        currentSlide = nextSlide + 1;
        $('.progress__bar').css('width', (currentSlide / totalSlides) * 100 + '%');
        fCurrentSlide = formattedIndex(currentSlide);
        fTotalSlides = formattedIndex(totalSlides);
        $('.main-kv__index strong').text(fCurrentSlide);
        $('.main-kv__index span').text(fTotalSlides);
    }

    function formattedIndex(index) {
        return index <= 9 ? '0' + index : index;
    }

    function count_override() {
        var a = 0;

        $('.counter-value').each(function () {
            var $this = $(this),
                countTarget = $this.attr('data-count');
            $({
                countNum: $this.text(),
            }).animate(
                {
                    countNum: countTarget,
                },
                {
                    duration: 1500,
                    easing: 'easeInOutQuad',
                    step: function () {
                        $this.text(won_Comma(Math.floor(this.countNum)));
                    },
                    complete: function () {
                        $this.text(won_Comma(this.countNum));
                    },
                }
            );
        });
        a = 1;
    }
    count_override();
});
