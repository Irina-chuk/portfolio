const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const persentNumber = document.querySelectorAll('.skills__percent-percent'),
      persentScale = document.querySelectorAll('.skills__percent-scale span');


persentNumber.forEach((item, i) => {
    persentScale[i].style.width = item.textContent;
});
