var btnMobile = document.querySelector('.btn-mobile');

btnMobile.addEventListener('click', function () {
	var viewport = document.querySelector("meta[name=viewport]");
	viewport.setAttribute('content', 'width=400');
});