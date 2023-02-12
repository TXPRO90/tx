class BasePage {
    constructor() {
    }

    onReady() {
        //
    }

    registerEvents() {
        //
    }

    /**
     * To avoid loading unwanted classes, unless it's wanted page
     * @param {null|string[]} allowedPages
     * @return {*}
     */
    initiate(allowedPages) {
        if (allowedPages && !allowedPages.includes(salla.config.get('page.slug'))) {
            return app.log(`The Class For (${allowedPages.join(',')}) Skipped.`);
        }

        this.onReady();
        this.registerEvents();
        app.log(`The Class For (${allowedPages?.join(',') || '*'}) Loaded🎉`);
    };
}

/**
 * Because we merged multi classes into one file, there is no need to initiate all of them
 */
<<<<<<< HEAD
BasePage.initiateWhenReady = function (className, allowedPages = null) {
    salla.onReady(() => {
        if (allowedPages && !allowedPages.includes(salla.config.get('page.slug'))) {
            app.log(className + ' Skiped.');
            return;
        }

        window.pageClass = new this;
        pageClass.onReady();
        pageClass.registerEvents();
        app.log(`${className} Loaded🎉`);
    })
=======
BasePage.initiateWhenReady = function (allowedPages = null) {
    if (window.app?.status === 'ready') {
        (new this).initiate(allowedPages);
    } else {
        document.addEventListener('theme::ready', () => (new this).initiate(allowedPages))
    }
>>>>>>> 8add5367bde03c12cbb8dc77322849a20ceaf707
}

export default BasePage;