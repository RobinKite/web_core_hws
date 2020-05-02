document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
var order = 1;
var order_reverse = 4;
let album_item = [];

function sliderLeft() {
    album_item[0] = document.getElementById('album-item-first');
    album_item[1] = document.getElementById('album-item-second');
    album_item[2] = document.getElementById('album-item-third');
    album_item[3] = document.getElementById('album-item-forth');

    for (var i = 0; i < 4; i++) {
        order = order + 1;
        if (order >= 5) {
            order = 1
        }
        album_item[i].style.order = order;
        if (album_item[i].style.order == 1) {
            album_item[i].style.opacity = 1;
        } else {
            album_item[i].style.opacity = 0.5;
        }
    }
}

function sliderRight() {
    album_item[0] = document.getElementById('album-item-first');
    album_item[1] = document.getElementById('album-item-second');
    album_item[2] = document.getElementById('album-item-third');
    album_item[3] = document.getElementById('album-item-forth');

    order_reverse = 4;

    for (var i = 3; i > 0; i--) {
        order_reverse = order_reverse - 1;
        if (order_reverse <= 0) {
            order_reverse = 4
        }
        album_item[i].style.order = order_reverse;
        if (album_item[i].style.everse == 1) {
            album_item[i].style.opacity = 1;
        } else {
            album_item[i].style.opacity = 0.5;
        }
    }
}