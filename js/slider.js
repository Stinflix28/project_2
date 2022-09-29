const images = document.querySelectorAll('.slider .slider__row img');
const sliderRow = document.querySelector('.slider__row');
let count = 0;
let width;

const init = () => {
	width = document.querySelector('.slider').offsetWidth;
	sliderRow.style.width = width * images.length + 'px';

	images.forEach(item => {
		item.style.width = width + 'px';
		item.style.height = 'auto';
	});
	rollSlider()
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider__next').addEventListener('click', () => {
	count++;
	if (count >= images.length) {
		count = 0;
	}
	rollSlider();
})

document.querySelector('.slider__prev').addEventListener('click', () => {
	count--;
	if (count < 0) {
		count = images.length - 1;
	}
	rollSlider();
})

function rollSlider() {
	sliderRow.style.transform = `translate(-${count * width}px)`;
}