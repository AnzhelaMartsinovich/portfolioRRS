let poster = document.querySelector('.online-video__poster'); 
document.querySelector('.online-video-btn').onclick = function () {
	this.style.display = 'none';
	poster.style.display = 'none';
};

//валидации формы
document.body.addEventListener('input', (event) => {
	let target = event.target;

	if (target.classList.contains('form-name') || target.classList.contains('form-question')) {
		target.value = target.value.replace(/[^a-zA-Zа-яА-ЯёЁ ]/, '');	
	}
	if (target.classList.contains('form-phone')) {
		target.value = target.value.replace(/[^0-9\+]/, '');
	}
	if (target.classList.contains('form-mail')) {
		target.value = target.value.replace(/	^ (([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	}
});