document.getElementById('slider-left').onclick = sliderLeft;
var order = 0;
var album_item = [];

function sliderLeft() {
    album_item[0] = document.getElementById('album-item-first');
    album_item[1] = document.getElementById('album-item-second');
    album_item[2] = document.getElementById('album-item-third');
    album_item[3] = document.getElementById('album-item-forth');

    for (var i = 0; i < 5; i++) {
        order = order + 1;
        if (order > 5) {
            order = 1
        }
        album_item[i].style.order = order;
    }
}