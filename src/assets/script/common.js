$(function () {
    const $gnbItems = $('.gnb__item');
    const $depth2 = $('.depth2');
    const $dim = $('.dim');
    const $familySiteBtn = $('.family-site button');
    const $familySiteUl = $familySiteBtn.siblings('ul');

    const header = {
        openMenu() {
            const $this = $(this);
            $this.addClass('active').siblings('li').removeClass('active');
            $depth2.stop().slideDown(250, 'easeInSine');
        },
        closeMenu() {
            const $this = $(this);
            $this.removeClass('active');
            $depth2.stop().slideUp(250, 'easeInSine');
        },
        visibleDim() {
            $dim.addClass('active');
        },
        hiddenDim() {
            $dim.removeClass('active');
        },
        init() {
            $gnbItems.on('mouseenter', this.openMenu).on('mouseleave', this.closeMenu);
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
        },
        init() {
            $familySiteBtn.on('click', this.toggleFamilySite);
            $(document).on('click', (e) => this.closeFamilySite(e));
        },
    };

    header.init();
    footer.init();
});
