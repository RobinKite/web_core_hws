document.getElementById('slider-left').onclick = sliderLeft;
var order = 0;

function sliderLeft() {
    var album_item = document.getElementById('album-item-first');
    var album_item = document.getElementById('album-item-second');
    var album_item = document.getElementById('album-item-third');

    var album_item = document.getElementById('album-item-forth');

    order = order + 1;
    if (order > 5) {
        order = 1
    }
    album_item.style.order = order;
}