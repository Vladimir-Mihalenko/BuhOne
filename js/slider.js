const img = document.querySelectorAll('.SlіderBox');
const SliderLine = document.querySelector('.SliderLine');
const circles = document.querySelectorAll('.Circle');
let count = 0;
let width;


function init() {
    width = document.querySelector('.SliderWrapper').offsetWidth;
    SliderLine.style.width = width * img.length + 'px';
    img.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.SliderNavButtonRigth').addEventListener('click', function () {
    count++;
    if (count >= img.length) {
        count = 0;
    }
    rollSlider();
    rollcircles();
});

document.querySelector('.SliderNavButtonLeft').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = img.length - 1;
    }
    rollSlider();
    rollcircles();
});

function rollSlider() {
    SliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
function rollcircles() {
    circles.forEach(item => {
        item.style.opacity = '0.2';
        if (item == circles[count]){
            circles[count].style.opacity = "1";
        }
    });
}