document.getElementById('slider-left').onclick = sliderLeft;

function sliderLeft() {
    var line = document.getElementById('line');
    left = left - 128;
    line.style.left = left + 'px';
}