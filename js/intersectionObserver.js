const $container = document.querySelector('.container');

const $container1 = document.querySelectorAll('.container1');

const options = {
	root: null, // 이것은 view 포트이다.
	threshold: 0, // 임계값이라고 한다.
	rootMargin: '-150px', // css 여백을 설정하면
};
// 1관찰자를 만들자
// 교차로 관찰자. .? 콜백함수가 필요하고 옵션이 필요하다,
// 화살표 함수로 하지 말라고 한다
const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		console.log(entry.isIntersecting);
		if (!entry.isIntersecting) {
			entry.target.classList.remove('inverse');
			return;
		}
		console.log(entry.target);
		entry.target.classList.add('inverse');
	});
}, options);

// 뭘관찰하고 싶은지
// observer.observe($container);
$container1.forEach((section) => {
	observer.observe(section);
});

// $container의 전체 내용을 알 수 있다.
// 이 안에서 inIntersecting은 교차 했는지 알 수 있다.
