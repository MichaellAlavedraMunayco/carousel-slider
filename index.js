const $ = document.querySelector.bind(document);

const slideList = [$('div.slide-1'), $('div.slide-2'), $('div.slide-3')];
const slideDotList = [$('div.slide-dot-1'), $('div.slide-dot-2'), $('div.slide-dot-3')];

const slideCount = slideList.length - 1;

let slideIndex = 0;

function autoscroll() {

	setTimeout(() => {

		slideIndex = slideIndex > slideCount ? 0 : slideIndex;

		const slide = slideList[slideIndex];
		const slideDot = slideDotList[slideIndex];

		slideDotList.forEach(slideDot => slideDot.classList.remove('active'));
		slideDot.classList.add('active');

		slide.scrollIntoView();

		slideIndex++;

		autoscroll();

	}, 3000);

}

autoscroll();