$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.svg"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});

const hamburger = document.querySelector('.hamburger'),
      mobile = document.querySelector('.mobile'),
      closeElem = document.querySelector('.mobile__close'),
      menuOverlay = document.querySelector('.mobile__overlay');

/* const closeModal = (element) => {
    element.classList.remove('active');
}

hamburger.addEventListener('click', () => {
    mobile.classList.add('active');
});

closeElem.addEventListener('click', closeModal(mobile));

menuOverlay.addEventListener('click', closeModal(mobile)); */

hamburger.addEventListener('click', () => {
    mobile.classList.add('active');
});

closeElem.addEventListener('click', () => {
    mobile.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
    mobile.classList.remove('active');
});