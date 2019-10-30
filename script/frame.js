const btnChange = document.querySelector('.change'),
	text = document.querySelector('.change-text'),
	iframe = document.querySelector('.iframe'),
	containerFrame = document.querySelector('.container-iframe');

function changeText(width) {
	let newText = width > 640 ? 'mobile' : 'desktop';
	text.textContent = newText.toUpperCase();
}

function changeWidth() {
	if (iframe.classList[1] === 'theyalow-iframe') {
		containerFrame.classList.toggle('width640');
		iframe.classList.toggle('theyalow-height');
		iframe.classList.toggle('theyalow-height-mob');
		// if (containerFrame.classList.contains('width640')) {
		// 	containerFrame.classList.remove('width640');
		// 	iframe.classList.add('theyalow-height');
		// 	iframe.classList.remove('theyalow-height-mob');
		// } else {
		// 	containerFrame.classList.add('width640');
		// 	iframe.classList.remove('theyalow-height');
		// 	iframe.classList.add('theyalow-height-mob');
		// }
	}

	if (iframe.classList[1] === 'repair-iframe') {
		containerFrame.classList.toggle('width375');
		iframe.classList.toggle('repair-height');
		iframe.classList.toggle('repair-height-mob');
	}

	changeText(getComputedStyle(iframe).width);
}
btnChange.addEventListener('click', changeWidth);