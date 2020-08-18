let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');

let text = document.getElementById('text');

window.addEventListener('scroll', function() {
	var scrollValue = window.scrollY;

	bg.style.top = scrollValue * 0.5 + 'px';
	moon.style.left = scrollValue * 0.5 + 'px';
	mountain.style.top = scrollValue * 0.15 + 'px';
	bg.style.top = scrollValue * 0.5 + 'px';

	text.style.top = scrollValue * 1 + 'px';
});
