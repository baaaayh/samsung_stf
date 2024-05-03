$(function () {
    const footer = {
        toggleFamilySite() {
            $(this).toggleClass('active').siblings('ul').slideToggle();
        },
        closeFamilySite(e) {
            const $target = $(e.target).parents();
            if (!$target.hasClass('family-site')) {
                $('.family-site button').removeClass('active').siblings('ul').slideUp();
            }
        },
        init() {
            $('.family-site button').on('click', this.toggleFamilySite);
            $(document).on('click', (e) => this.closeFamilySite(e));
        },
    };

    return [footer.init()];
});
