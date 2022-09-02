const nav = document.querySelector('nav');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

open.addEventListener('click', () => {
    nav.classList.add('active');
    open.classList.add('hidden');
    close.classList.remove('hidden');
})

close.addEventListener('click', () => {
    nav.classList.remove('active');
    close.classList.add('hidden');
    open.classList.remove('hidden');
})