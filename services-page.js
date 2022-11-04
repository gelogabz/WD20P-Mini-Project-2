// NAVBAR 
var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-light', 'shadow', 'bg-opacity-75');
    } else {
        nav.classList.remove('bg-light', 'shadow',);
    }

})
// EFFECT IN accordion
const sliderElm = document.querySelector(".slider-container .slider");
const btnLeft = document.querySelector(".slider-container .btn-left");
const btnRight = document.querySelector(".slider-container .btn-right");

const numberSliderBoxs = sliderElm.children.length;
let idxCurrentSlide = 0;

// Functions:
function moveSlider() {
    let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
    sliderElm.style.marginLeft = -leftMargin + "px";
    console.log(sliderElm.clientWidth, leftMargin);
}
function moveLeft() {
    if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
    else idxCurrentSlide--;

    moveSlider();
}
function moveRight() {
    if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
    else idxCurrentSlide++;

    moveSlider();
}

// Event Listeners:
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("resize", moveSlider);



//sample vid carousel
