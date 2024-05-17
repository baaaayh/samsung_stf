$(function () {
    let totalSlides = $('.main-kv__slide').length,
        fTotalSlides = $('.main-kv__slide').length;
    let currentSlide, fCurrentSlide;
    let formattedIndex;
    let updateProgress;

    const kv = {
        progressFunc() {
            formattedIndex = function (index) {
                return index <= 9 ? '0' + index : index;
            };
            updateProgress = function (nextSlide = 0) {
                currentSlide = nextSlide + 1;
                $('.progress__bar').css('width', (currentSlide / totalSlides) * 100 + '%');
                fCurrentSlide = formattedIndex(currentSlide);
                fTotalSlides = formattedIndex(totalSlides);
                $('.main-kv__index strong').text(fCurrentSlide);
                $('.main-kv__index span').text(fTotalSlides);
            };
        },
        kvInit() {
            $('.main-kv__slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1500,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                pauseOnHover: true,
                dots: true,
                appendDots: $('.main-kv__control'),
            });
        },
        getCurrentIndex() {
            currentSlide = $('.main-kv__slider').slick('slickCurrentSlide');
            updateProgress(currentSlide);
        },
        handleProgess() {
            $('.main-kv__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                updateProgress(nextSlide);
            });
        },
        init() {
            this.progressFunc();
            this.kvInit();
            this.getCurrentIndex();
            this.handleProgess();
        },
    };

    const main = {
        countOverride() {
            let a = 0;
            $('.counter-value').each(function () {
                let $this = $(this),
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
        },
        init() {
            this.countOverride();
        },
    };

    return [kv.init(), main.init()];
});
