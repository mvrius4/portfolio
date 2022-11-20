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

const tl = gsap.timeline({ defaults: { duration: 0.75, ease: 'Power3.easeOut' } });
tl.fromTo('.hero__circle', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 });
tl.fromTo('.hero__left-side', { opacity: 0, x: -100 }, { opacity: 1, x: 0 });
tl.fromTo('.hero__icons', { opacity: 0, x: 100 }, { opacity: 1, x: 0 });
tl.fromTo('.hero__bg-text', { opacity: 0, y: 100 }, { opacity: 1, y: 0 });

const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: '0%',
        end: '60%',
        scrub: true,
    }
});

tlH.fromTo('.hero__circle', { scale: 1 }, { scale: .6 });

const tlS = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: '10%',
        end: '80%',
        scrub: false,
    }
});

tlS.fromTo('.services', { opacity: 0 }, { opacity: 1 })

const tlS2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: '10%',
        end: '60%',
        scrub: true,
    }
});

tlS2.fromTo('.services__circle', { scale: 1.1, x: -100 }, { scale: 1, x: 0 });

tlP = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: '20%',
        end: '80%',
        scrub: false,
    }
});
tlP.fromTo('.projects__content-card', { opacity: 0, y: -100, scale: .8 }, { opacity: 1, y: 0, scale: 1, stagger: .1 });