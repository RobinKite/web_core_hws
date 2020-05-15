document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
let order = 1;
let album_item = [];
album_item[0] = document.getElementById('album-item-first');
album_item[1] = document.getElementById('album-item-second');
album_item[2] = document.getElementById('album-item-third');
album_item[3] = document.getElementById('album-item-forth');
var album_num = 0;

var myList = document.getElementById('tracklist');
// li.setAttribute("id", "element4");



function sliderLeft() {
    for (var i = 0; i <= 4; i++) {
        order = order + 1;
        if (order >= 5) {
            order = 1
        }
        album_item[i].style.order = order;
        console.log(order);
        if (album_item[i].style.order == 1) {
            album_item[i].style.opacity = 1;
            album_num = i;
            removeLi();
            trackAdd();
        } else {
            album_item[i].style.opacity = 0.5;
        }
    }
    order = 1;
}

function sliderRight() {
    for (var i = 0; i <= 4; i++) {
        order = order - 1;
        if (order <= 0) {
            order = 4
        }
        album_item[i].style.order = order;
        console.log(order);
        if (album_item[i].style.order == 1) {
            album_item[i].style.opacity = 1;
            album_num = i;
            removeLi();
            trackAdd();
        } else {
            album_item[i].style.opacity = 0.5;
        }
    }
    order = 1;

}

// function sliderRight() {
//     for (var i = 4; i >= 0; i--) {
//         order = order - 1;
//         if (order <= 0) {
//             order = 4
//         }
//         album_item[i - 1].style.order = order;
//         console.log(order);

//         if (album_item[i - 1].style.order == 1) {
//             album_item[i - 1].style.opacity = 1;
//             album_num = i - 1;
//             removeLi();
//             trackAdd();
//         } else {
//             album_item[i - 1].style.opacity = 0.5;
//         }
//     }

// }


function trackAdd() {

    if (album_num == 0) {
        document.getElementById("album-name").innerHTML = "Kiss Land";
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
    if (album_num == 1) {
        document.getElementById("album-name").innerHTML = "Beauty behind the madness";
        document.getElementById("likes").innerHTML = "420 752";

        var tracks = ['Real Life', 'Losers', 'Tell Your Friends', 'Often', 'The Hills', 'Acquainted', 'Can`t Feel My Face', 'Shameless', 'Earned It', 'In the Night', 'As You Are', 'Dark Times', 'Prisoner', 'Angel'];
        var ul = document.getElementById("tracklist");

        for (var i = 0; i < tracks.length; i++) {
            var name = tracks[i];
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(name));
            ul.appendChild(li);
        }
    }
    if (album_num == 2) {
        document.getElementById("album-name").innerHTML = "Starboy";
        document.getElementById("likes").innerHTML = "534 648";

        var tracks = ['Starboy', 'Party Monster', 'False Alarm', 'Reminder', 'Rockin`', 'Secrets', 'True Colors', 'Stargirl Interlude', 'Sidewalks', 'Six Feet Under', 'Love to Lay', 'A Lonely Night', 'Attention', 'Ordinary Life', 'Nothing Without You', 'All I Know', 'Die for You', 'I Feel It Coming'];
        var ul = document.getElementById("tracklist");

        for (var i = 0; i < tracks.length; i++) {
            var name = tracks[i];
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(name));
            ul.appendChild(li);
        }
    }
    if (album_num == 3) {
        document.getElementById("album-name").innerHTML = "After hours";
        document.getElementById("likes").innerHTML = "235 457";

        var tracks = ['Alone Again', 'Too Late', 'Hardest to Love', 'Scared to Live', 'Snowchild', 'Escape from LA', 'Heartless', 'Faith', 'Blinding Lights', 'In Your Eyes', 'Save Your Tears', 'Repeat After Me', 'After Hours', 'Until I Bleed Out'];
        var ul = document.getElementById("tracklist");

        for (var i = 0; i < tracks.length; i++) {
            var name = tracks[i];
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(name));
            ul.appendChild(li);
        }
    }
}

function removeLi() {
    var lis = document.querySelectorAll('#tracklist li');
    for (var i = 0; li = lis[i]; i++) {
        li.parentNode.removeChild(li);
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}