const headerTopElement = document.getElementById('header-top');
const headerTopOffsetTop = headerTopElement.offsetTop;
const headerNav = document.getElementById('main-nav');
const headerNavBurger = document.getElementById('nav-burger');

const navBgColor = () => {
    if (window.scrollY >= headerTopOffsetTop && window.innerWidth > 930) {
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

headerNavBurger.addEventListener('click', () => {
    headerNav.classList.toggle('main-nav--active');
    document.body.classList.toggle('lock');
});
