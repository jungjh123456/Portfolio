const $container2 = document.querySelector('.container2');
const $slides2 = document.querySelector('.slides2');
const $slides2li = document.querySelectorAll('.slides2 > li');
const $prev2 = document.querySelector('.prev2');
const $next2 = document.querySelector('.next2');

let slideId2;
let index2 = 0;
console.log($slides2li);

const moveToNextSlideMove = () => {
	if (index2 === 1) return;
	index2++;
	console.log(index2);
};

const startSlideMove = () => {
	slideId2 = setInterval(() => {
		console.log('dd');
		moveToNextSlideMove();
	}, 2000);
};
// startSlideMove();
