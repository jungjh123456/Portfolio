const $container2 = document.querySelector('.container2');
const $slides2 = document.querySelector('.slides2');

const $prev2 = document.querySelector('.prev2');
const $next2 = document.querySelector('.next2');

let slideId2;
let index2 = 0;

let state = [1, 2, 3, 4, 5, 6, 7];
const $containerWidth = $container2.offsetWidth;
console.log($containerWidth);
state.forEach((item) => {
	let $li = document.createElement('li');
	$li.textContent = item;
	$slides2.appendChild($li);
});
console.log($slides2);
const $slidesLi = document.querySelectorAll('.slides2 > li');
let slideWidth2 = $slidesLi[0].offsetWidth;

const moveToNextSlideMove = () => {
	if (index2 === 1) return;
	index2++;
	console.log(index2);
};
const firstSlide = () => {
	console.log(index2);
	let sp = state.slice(-1, state[state.length - 1] + 1);
	console.log(sp);
	console.log(state);
	sp = [...sp, ...state];
	sp.forEach((item) => {
		let $li = document.createElement('li');
		$li.textContent = item;
		$slides2.prepend($li);
	});
};
const lastSlide = () => {
	console.log(index2);
	let sp = state.splice(0, index2);
	console.log(sp);
	console.log(state);
	state = [...state, ...sp];
	sp.forEach((item) => {
		let $li = document.createElement('li');
		$li.textContent = item;
		$slides2.appendChild($li);
	});
};
const moveToNextSlide2 = () => {
	if (index2 > 3) {
		lastSlide();
	}
	index2++;

	$slides2.style.transform = `translateX(${-slideWidth2 * index2}px)`;
	$slides2.style.transition = '.7s';
};
const moveToPrevSlide2 = () => {
	if (index2 <= 0) return;
	index2--;

	$slides2.style.transform = `translateX(${-slideWidth2 * index2}px)`;
	$slides2.style.transition = '.7s';
};

$next2.onclick = () => {
	console.log('d');
	moveToNextSlide2();
};

$prev2.onclick = () => {
	console.log('d');
	moveToPrevSlide2();
};
