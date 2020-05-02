document.getElementById('slider-left').onclick = sliderLeft;
var order = 0;

function sliderLeft() {
    var line = document.getElementById('album-item');
    left = left - 582;
    if (left < -768) {
        left = 0;
    }
    line.style.left = left + 'px';
}