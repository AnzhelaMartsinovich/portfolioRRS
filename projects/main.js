// var btnMobile = document.querySelector('.btn-mobile');

// btnMobile.addEventListener('click', function () {
// 	var viewport = document.querySelector("meta[name=viewport]");
// 	viewport.setAttribute('content', 'width=400');
// });

let change = document.querySelector('.change');
console.log(change);
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	change.style.display = "none";
}