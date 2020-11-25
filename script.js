const activeView = document.querySelector('.active-view');
const prevBtn = document.querySelector('.nav__btn--prev');
const nextBtn = document.querySelector('.nav__btn--next');

prevBtn.addEventListener('click', () => {
  activeView.classList.remove('next');
});

nextBtn.addEventListener('click', () => {
  activeView.classList.add('next');
});
