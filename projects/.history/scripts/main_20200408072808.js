document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
var order = 1;
let album_item = [];
album_item[0] = document.getElementById('album-item-first');
album_item[1] = document.getElementById('album-item-second');
album_item[2] = document.getElementById('album-item-third');
album_item[3] = document.getElementById('album-item-forth');

var myList = document.getElementById('tracklist');
// li.setAttribute("id", "element4");

function removeLi() {
    var lis = document.querySelectorAll('#tracklist li');
    for (var i = 0; li = lis[i]; i++) {
        li.parentNode.removeChild(li);
    }
}

function sliderLeft() {
    for (var i = 0; i <= 4; i++) {
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

    for (var i = 4; i >= 0; i--) {
        order = order - 1;
        if (order <= 0) {
            order = 4
        }
        album_item[i - 1].style.order = order;
        if (album_item[i - 1].style.order == 1) {
            album_item[i - 1].style.opacity = 1;
        } else {
            album_item[i - 1].style.opacity = 0.5;
        }
    }
}
removeLi();

function trackAdd() {

    document.getElementById("music-name").innerHTML = "Kiss Land";
    document.getElementById("likes").innerHTML = "356 852";

    var tracks = ['Professional', 'The Town', 'Adaptation', 'Love in the sky', 'Belong to the World', 'Live fore', 'Wanderlust', 'Kiss Land', 'Pretty', 'Tears in the Rain'];
    var ul = document.getElementById("tracklist");

    for (var i = 0; i < tracks.length; i++) {
        var name = tracks[i];
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(name));
        ul.appendChild(li);
    }
}