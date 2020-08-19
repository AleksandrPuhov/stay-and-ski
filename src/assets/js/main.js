const headerTopElement = document.getElementById('header-top');
const headerTopOffsetTop = headerTopElement.offsetTop;
const headerNav = document.getElementById('main-nav');
const headerNavBurger = document.getElementById('nav-burger');
const navRefList = [...document.querySelectorAll('.main-nav__ref')];

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

navRefList.forEach((ref) => {
    ref.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href').replace('#', '');
        const scrollTop = document.getElementById(sectionId).offsetTop;
        window.scrollTo({ top: scrollTop - 100, left: 0, behavior: 'smooth' });
    });
});
