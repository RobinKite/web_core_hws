document.getElementById('slider-left').onclick = sliderLeft;
var order = 0;

function sliderLeft() {
    var album_item[0] = document.getElementById('album-item-first');
    var album_item[1] = document.getElementById('album-item-second');
    var album_item[2] = document.getElementById('album-item-third');
    var album_item[3] = document.getElementById('album-item-forth');

    for (var i = 0; i < 5; i++) {
        order = order + 1;
        if (order > 5) {
            order = 1
        }
        album_item_first.style.order = order;
    }
}