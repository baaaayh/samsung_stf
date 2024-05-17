$(function () {
    const $gnb = $('.gnb');
    const $gnbItems = $('.gnb__item');
    const $depth2 = $('.gnb .depth2');
    const $dim = $('.dim');
    const $familySiteBtn = $('.family-site button');

    const header = {
        openMenu() {
            const $this = $(this);
            $depth2.slideDown(250, 'easeInSine');
        },
        closeMenu() {
            const $this = $(this);
            $this.removeClass('active');
            $depth2.stop().slideUp(250, 'easeInSine');
        },
        activeItem() {
            const $this = $(this);
            $this.addClass('active').siblings('li').removeClass('active');
        },
        inActiveItem() {
            const $this = $(this);
            $this.removeClass('active');
        },
        visibleDim() {
            $dim.addClass('active');
        },
        hiddenDim() {
            $dim.removeClass('active');
        },
        init() {
            $gnb.on('mouseenter', this.openMenu).on('mouseleave', this.closeMenu);
            $gnbItems.on('mouseenter', this.activeItem).on('mouseleave', this.inActiveItem);
            $gnbItems.on('mouseenter', this.visibleDim).on('mouseleave', this.hiddenDim);
        },
    };

    const footer = {
        toggleFamilySite() {
            const $this = $(this);
            $this.toggleClass('active').siblings('ul').slideToggle();
        },
        closeFamilySite(e) {
            const $target = $(e.target).closest('.family-site');
            if (!$target.length) {
                $familySiteBtn.removeClass('active').siblings('ul').slideUp();
            }
            if ($(e.target).parents().hasClass('family-site__list')) {
                $('.family-site button').removeClass('active').siblings('ul').slideUp();
            }
        },
        init() {
            $familySiteBtn.on('click', this.toggleFamilySite);
            $(document).on('click', (e) => this.closeFamilySite(e));
        },
    };

    const refCheck = {
        checkSharp(e) {
            if ($(e.target).attr('href') === '#') {
                e.preventDefault();
            }
        },
        init() {
            $('a').on('click', (e) => this.checkSharp(e));
        },
    };

    refCheck.init();
    header.init();
    footer.init();
});
