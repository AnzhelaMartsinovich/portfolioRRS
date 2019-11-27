const btnChange = document.querySelector('.change'),
	text = document.querySelector('.change-text'),
	iframe = document.querySelector('.iframe'),
	containerFrame = document.querySelector('.container-iframe');
text.textContent = 'MOBILE';

function changeText() {
	if (text.textContent === 'MOBILE') {
		text.textContent = 'DESKTOP';
	} else {
		text.textContent = 'MOBILE';
	}
}

function changeWidth() {
	if (iframe.classList[1] === 'theyalow-iframe') {
		containerFrame.classList.toggle('width640');
		iframe.classList.toggle('theyalow-height');
		iframe.classList.toggle('theyalow-height-mob');
	}

	if (iframe.classList[1] === 'repair-iframe') {
		containerFrame.classList.toggle('width375');
		iframe.classList.toggle('repair-height');
		iframe.classList.toggle('repair-height-mob');
	}
	changeText();
}
btnChange.addEventListener('click', changeWidth);