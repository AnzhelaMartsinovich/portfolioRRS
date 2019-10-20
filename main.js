//dropdown
const dropdownWrap = document.getElementById('dropdown-wrap'),
	educationTitle = document.querySelector('.dropdown-title');
		
    document.onclick = function(event) {
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
    }
        
// slider
const slide = document.querySelectorAll('.projects-item'),
    slider = document.querySelector('.projects-content'),
    portfolioDots = document.querySelector('.projects-dots');

let dot;

const createDots = () => {

    slide.forEach((elem) => {
        elem = document.createElement('li');
        elem.className = 'dot';
        portfolioDots.appendChild(elem);

        dot = document.querySelectorAll('.dot');
    })
    dot[0].className = 'dot dot-active';
};
createDots();

let currentSlide = 0,
    interval;

const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
};

const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
};

const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'projects-item-active');
    prevSlide(dot, currentSlide, 'dot-active');

    currentSlide++;
    if (currentSlide >= slide.length) {
        currentSlide = 0;
    }

    nextSlide(slide, currentSlide, 'projects-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
};

// const startSlide = (time = 3000) => {
const startSlide = (time = 100000) => {
    interval = setInterval(autoPlaySlide, time);
};

const stopSlide = () => {
    clearInterval(interval);
};

slider.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;

    if (!target.matches('.projects-btn, .dot')) {
        return;
    }

    prevSlide(slide, currentSlide, 'projects-item-active');
    prevSlide(dot, currentSlide, 'dot-active');

    if (target.matches('#arrow-right')) {
        currentSlide++;
    } else if (target.matches('#arrow-left')) {
        currentSlide--;
    } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
            if (elem === target) {
                currentSlide = index;
            }
        });
    }

    if (currentSlide >= slide.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide, 'projects-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
});

slider.addEventListener('mouseover', (event) => {
    if (event.target.matches('.projects-btn') ||
        event.target.matches('.dot')) {
        stopSlide();
    }
});

slider.addEventListener('mouseout', (event) => {
    if (event.target.matches('.projects-btn') ||
        event.target.matches('.dot')) {
        startSlide();
    }
});

startSlide();