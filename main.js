//dropdown
const dropdownWrap = document.getElementById('dropdown-wrap'),
    educationTitle = document.querySelector('.dropdown-title'),
    education = document.querySelector('.education');
		
    education.addEventListener('click', (event) => {
    var target = elem = event.target;
    while (target != this) {
			if (target == dropdownWrap) {
						// if (elem.tagName == 'LI') educationTitle.innerHTML = elem.textContent;
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
    // event.preventDefault();
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

    projects.addEventListener('click', (event) => {
        var target = elem = event.target;

        if (target === btn1){
            descr1.classList.toggle('descr-open');
        }
        if (target === btn2){
            descr2.classList.toggle('descr-open');
        }
    });

//

let change = document.querySelector('.change');
console.log(change);
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    change.style.display = "none";
}