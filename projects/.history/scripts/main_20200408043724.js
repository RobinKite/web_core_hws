document.getElementById('slider-left').onclick = sliderLeft;
var order = 0;

function sliderLeft() {
    var album_item = document.getElementById('album-item');
    order = order + 1;
    if (order > 4) {
        order = 1
    }
    album_item.style.order = order;
}