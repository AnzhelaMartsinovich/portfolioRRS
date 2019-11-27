//dropdown
const dropdownWrap = document.getElementById('dropdown-wrap'),
    educationTitle = document.querySelector('.dropdown-title'),
    education = document.querySelector('.education');

education.addEventListener('click', (event) => {
    var target = elem = event.target;
    while (target != this) {
        if (target == dropdownWrap) {
            dropdownWrap.classList.toggle('open')
            return;
        }
        target = target.parentNode;
    }
    dropdownWrap.classList.remove('open');
});

// slider
const slide = document.querySelectorAll('.projects-slide'),
    slider = document.querySelector('.projects-slider');

let currentSlide = 0,
    interval;

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
let btn1 = document.querySelector('.btn1'),
    btn2 = document.querySelector('.btn2'),
    descr1 = document.querySelector('.descr1'),
    descr2 = document.querySelector('.descr2'),
    projects = document.querySelector('.projects');

let btn1Mob = document.querySelector('.btn1Mob'),
    btn2Mob = document.querySelector('.btn2Mob'),
    descr1Mob = document.querySelector('.descr1-mob'),
    descr2Mob = document.querySelector('.descr2-mob');

projects.addEventListener('click', (event) => {
    var target = elem = event.target;

    if (target === btn1) {
        descr1.classList.toggle('descr-open');
    }
    if (target === btn2) {
        descr2.classList.toggle('descr-open');
    }
    if (target === btn1Mob) {
        descr1Mob.classList.toggle('descr-open');
    }
    if (target === btn2Mob) {
        descr2Mob.classList.toggle('descr-open');
    }
});