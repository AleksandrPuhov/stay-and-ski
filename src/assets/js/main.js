const headerTopElement = document.getElementById('header-top');
const headerTopOffsetTop = headerTopElement.offsetTop;

const navBgColor = () => {
    if (window.scrollY >= headerTopOffsetTop) {
        headerTopElement.classList.add('header-top--fixed');
    } else {
        headerTopElement.classList.remove('header-top--fixed');
    }
};

const mySwiper = new Swiper('.testimonial__swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.testimonial__swiper-pagination',
        clickable: true,
    },
});

window.addEventListener('scroll', () => {
    navBgColor();
});
