const headerTopElement = document.getElementById('header-top');
const headerTopOffsetTop = headerTopElement.offsetTop;

const navBgColor = () => {
    if (window.scrollY >= headerTopOffsetTop) {
        headerTopElement.classList.add('header-top--fixed');
    } else {
        headerTopElement.classList.remove('header-top--fixed');
    }
};

window.addEventListener('scroll', () => {
    navBgColor();
});
