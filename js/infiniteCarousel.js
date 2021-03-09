const $slideGroup = document.querySelector('.container');
const $slide = document.querySelector('.slides');
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');
const interval = 2000;

let $li = document.querySelectorAll('.slides > li');
let index = 0;
let slideId;

const firstClone = $li[0].cloneNode(true);
const lastClone = $li[$li.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
console.log(firstClone.id, lastClone.id, $li[index]);
$slide.append(firstClone);
$slide.prepend(lastClone);

let slideWidth = $li[index].offsetWidth;
console.log(slideWidth);

const startSlide = () => {
	slideId = setInterval(() => {
		moveToNextSlide();
	}, interval);
};
const getSlides = () => document.querySelectorAll('.slides > li');

$slide.addEventListener('transitionend', () => {
	$li = getSlides();
	if ($li[index].id === firstClone.id) {
		$slide.style.transition = 'none';
		index = 1;
		$slide.style.transform = `translateX(${-slideWidth * index}px)`;
	}
	if ($li[index].id === lastClone.id) {
		$slide.style.transition = 'none';
		index = $li.length - 2;
		$slide.style.transform = `translateX(${-slideWidth * index}px)`;
	}
	console.log('transition end');
});
const moveToPreviousSlide = () => {
	if (index <= 0) return;
	index--;
	$slide.style.transform = `translateX(${-slideWidth * index}px)`;
	$slide.style.transition = '.7s';
};
const moveToNextSlide = () => {
	$li = getSlides();
	if (index >= $li.length - 1) return;
	index++;
	$slide.style.transform = `translateX(${-slideWidth * index}px)`;
	$slide.style.transition = '.7s';
};

$slideGroup.addEventListener('mouseenter', () => {
	clearInterval(slideId);
});

$slideGroup.addEventListener('mouseleave', startSlide);

$next.addEventListener('click', moveToNextSlide);
$prev.addEventListener('click', moveToPreviousSlide);
startSlide();

// const TimeOut = () => {
// 	setTimeout(() => {
// 		$slide.style.transition = '1s linear';
// 	}, 400);
// };

// $next.onclick = (e) => {
// 	slideWidth += $slide.children[0].offsetWidth;
// 	console.log($li);
// 	count += 1;

// 	$slide.addEventListener('transitionend', () => {
// 		if (count > 2) {
// 			$slide.style.transition = 'none';
// 			count = 0;
// 			slideWidth = 0;
// 			TimeOut();
// 		}
// 		console.log(count);
// 		console.log('end');
// 	});

// 	$slide.style.transform = `translateX(-${slideWidth}px)`;
// };
