const mobileBtn = document.querySelector('.js-mobile-btn');
const mobileIcon = document.querySelector('.js-mobile-burger');
const mobileNav = document.querySelector('.js-mobile-nav');

module.exports = () => {
    mobileBtn.addEventListener('click', () => {
        mobileIcon.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
}