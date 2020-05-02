document.getElementById('slider-left').onclick = sliderLeft;
var order = 0;

function sliderLeft() {
    var album_item = document.getElementById('album-item');
    album_item.style.order = order + 1;
}