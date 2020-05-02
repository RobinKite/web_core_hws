document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
var order = 1;
let album_item = [];
album_item[0] = document.getElementById('album-item-first');
album_item[1] = document.getElementById('album-item-second');
album_item[2] = document.getElementById('album-item-third');
album_item[3] = document.getElementById('album-item-forth');

function sliderLeft() {

    for (var i = 0; i <= 4; i++) {
        order = order + 1;
        if (order >= 5) {
            order = 1
        }
        album_item[i].style.order = order;
        if (album_item[i].style.order == 1) {
            album_item[i].style.opacity = 1;
            trackAdd();

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
            trackAdd();

        } else {
            album_item[i - 1].style.opacity = 0.5;
        }
    }
}

function trackAdd() {
    var node = document.createElement("LI");
    // var textnode = document.createTextNode("Professional");
    let textnode = [];

    document.getElementById("music-name").innerHTML = "Kiss Land";
    document.getElementById("likes").innerHTML = "356 852";

    if (album_item[0].style.order = 1) {
        textnode[0] = document.createTextNode("Professional");
        textnode[1] = document.createTextNode("The Town");
        textnode[2] = document.createTextNode("Adaptation");
        textnode[3] = document.createTextNode("Love in the sky");
        textnode[4] = document.createTextNode("Belong to the World");
        textnode[5] = document.createTextNode("Live fore");
        textnode[6] = document.createTextNode("Wanderlust");
        textnode[7] = document.createTextNode("Kiss Land");
        textnode[8] = document.createTextNode("Pretty");
        textnode[9] = document.createTextNode("Tears in the Rain");
        for (var i = 0; i <= 9; i++) {
            node.appendChild(textnode[i]);
        }
        document.getElementById("tracklist").appendChild(node);
    }

}