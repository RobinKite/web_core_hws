let apiKey = 'e499fdc811dd4fd9ab9ce17429c6f723';

fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey)
    .then(response => response.json())
    .then(data => {
        // console.log(JSON.stringify(data, null, 2))
        for (let i in data) {
            if (i === "ip_address") {
                document.getElementById("ip").innerHTML = data[i];
            } else if (i === "city" || i === "country") {
                let location = document.getElementById("location")
                location.innerHTML += data[i];
                location.innerHTML += " ";
            }
        }
    });



// MANUAL

// const successCallback = (position) => {
//     console.log(position);
// };

// const errorCallback = (error) => {
//     console.log(error);
// };

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
//     enableHighAccuracy: true,
//     timeout: 5000
// });

// const watchID = navigator.geolocation.watchPosition(successCallback, errorCallback);