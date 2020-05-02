document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
    var line = document.getElementById('line');
    left = left - 128;
    if (left < -512) {
        left = 0;
    }
    line.style.left = left + 'px';
}