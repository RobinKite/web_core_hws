document.getElementById('slider-left').onclick = sliderLeft;

function sliderLeft() {
    var line = document.getElementById('line');
    line.style.left = -128 + 'px';
}