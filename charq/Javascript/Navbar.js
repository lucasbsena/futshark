class MobileNavbar {
    constructor(menuMobile, navList, navLinks) {
        this.menuMobile = document.querySelector(menuMobile);
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active";
    }
    addClickEvent() {
        this.menuMobile.addEventListener("click", () => console.log("teste"));
    }
    init() {
        if (this.menuMobile) {
            this.addClickEvent();
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".menuMobile",
    ".navList",
    ".navList li",

);

mobileNavbar.init();