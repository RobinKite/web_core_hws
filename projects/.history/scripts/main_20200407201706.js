document.getElementById('slider-left').onclick = sliderLeft;

function sliderLeft() {
    var album_list = document.getElementById('#album-list');
    album_list.style.left = -128 + 'px';
}