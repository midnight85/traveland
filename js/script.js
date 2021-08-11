let iconMenu = document.querySelector(".menu-icon");
if (iconMenu) {
    let menuBody = document.querySelector(".menu-body");
    iconMenu.addEventListener("click", (e) => {
        document.body.classList.toggle("--lock");
        iconMenu.classList.toggle("--active");
        menuBody.classList.toggle("--active");
    });
}

//slider
const swiper = new Swiper(".swiper-container", {
    observeParents: true,
    observeSlideChildren: true,
    observer: true,

    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {},
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            slidesPerGroupSkip: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerGroupSkip: 3,
            spaceBetween: 15,
        },
        992: {
            
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerGroupSkip: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            slidesPerGroupSkip: 4,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            slidesPerGroupSkip: 4,
            spaceBetween: 15,
        },
        1600: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            slidesPerGroupSkip: 5,
            spaceBetween: 70,
        },
    },
    
});
