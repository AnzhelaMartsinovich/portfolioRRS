//dropdown
const dropdownWrap = document.getElementById('dropdown-wrap');
const education = document.querySelector('.education');

// const dropdownTitle = document.querySelector('.dropdown-title'),
//     dropdownWrap = document.querySelector('menu'),
//     menuItems = dropdownWrap.querySelectorAll('ul > li');
//     console.log(dropdownWrap.querySelectorAll('ul > li'));
//     handleMenu = () => {
//         dropdownWrap.classList.toggle('open');
//     }

// dropdownTitle.addEventListener('click', handleMenu);

// dropdownWrap.addEventListener('click', (event) => {
//     let target = event.target;

//     if (target.classList.contains('dropdown-title')) {
//         handleMenu();
//     } else if (target.classList.contains(menuItems)) {
//         menuItems.forEach(() => {
//             handleMenu();
//         });
//     }
// });
    
education.addEventListener('click', (event) => {
    let target = elem = event.target;
    while (target != this) {
        if (target === dropdownWrap) {
            dropdownWrap.classList.toggle('open');
            return;
        }
        target = target.parentNode;
    }
});

// slider
const slide = document.querySelectorAll('.projects-slide');
const slider = document.querySelector('.projects-slider');

let currentSlide = 0;
let interval;

const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
};

const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
};


slider.addEventListener('click', (event) => {
    let target = event.target;
    if (!target.matches('.projects-arrow')) {
        return;
    }

    prevSlide(slide, currentSlide, 'projects-active');

    if (target.matches('.prev')) {
        currentSlide--;
    } else if (target.matches('.next')) {
        currentSlide++;
    }

    if (currentSlide >= slide.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide, 'projects-active');
});

//descr
const projects = document.querySelector('.projects');
const descr1 = document.querySelector('.descr1');
const descr2 = document.querySelector('.descr2');
const descr1Mob = document.querySelector('.descr1-mob');
const descr2Mob = document.querySelector('.descr2-mob');

projects.addEventListener('click', (event) => {
    let target = elem = event.target;
    if (target.closest('.btn1')) {
        console.log();
        descr1.classList.toggle('descr-open');
    }
    if (target.closest('.btn2')) {
        descr2.classList.toggle('descr-open');
    }
    if (target.closest('.btn1Mob')) {
        descr1Mob.classList.toggle('descr-open');
    }
    if (target.closest('.btn2Mob')) {
        descr2Mob.classList.toggle('descr-open');
    }
});