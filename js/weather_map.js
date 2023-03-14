mapboxgl.accessToken = mapBoxKey;

const map = new mapboxgl.Map(
    {
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
        center: [-98.491142,29.424349], // starting position [lng, lat]
        zoom: 10, // starting zoom (0 - 20)
    }
);

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.491142,29.424349])
    .addTo(map);

//marker portion
marker.on('dragend', function(e){
    let longlat = e.target._lngLat;
    console.log(longlat);
    reverseGeocode({lat: longlat.lat, lng:longlat.lng}, mapBoxKey).then(function (results){
        console.log(results);
        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${openWeatherKey}&units=imperial`).done(function (data) {
            for(var i = 0; i <=39; i +=8) {
                html += `<div>`
                html += `<h5>${data.list[i].dt_txt}</h5>`
                html += `<h6>${data.list[i].main.temp}</h6>`
                html += `<h6><img class="icons" src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"</h6>`
                html += `<h6>Description: ${data.list[i].weather[0].description}</h6>`
                html += `<h6>Humidity: ${data.list[i].main.humidity}</h6>`
                html += `<h6>Wind: ${data.list[i].wind.speed}</h6>`
                html += `<h6>Pressure: ${data.list[i].main.pressure}</h6>`
                html += `</div>`
            }
            $("#weatherBody").html(html);

        })
        html ="";
    })

});


// search portion
function geoCodeBuildWeather(searchString) {
    let html = "";
    geocode(searchString, mapBoxKey).then(function (results) {
        let myOptionsObj = {
            center: results,
            zoom: 10
        };
        map.flyTo(myOptionsObj);

        console.log(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${openWeatherKey}&units=imperial`);

        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${openWeatherKey}&units=imperial`).done(function (data) {
            for( var i = 0; i <=39; i +=8) {
                html += `<div>`
                html += `<h5>${data.list[i].dt_txt}</h5>`
                html += `<h6>${data.list[i].main.temp}</h6>`
                html += `<h6><img class="icons" src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"</h6>`
                html += `<h6>Description: ${data.list[i].weather[0].description}</h6>`
                html += `<h6>Humidity: ${data.list[i].main.humidity}</h6>`
                html += `<h6>Wind: ${data.list[i].wind.speed}</h6>`
                html += `<h6>Pressure: ${data.list[i].main.pressure}</h6>`
                html += `</div>`
            }
            $("#weatherBody").html(html);
        })
        html ="";
    })
}


$("#myBtn").click(function(e){
    e.preventDefault();
    geoCodeBuildWeather($("#searchInput").val());
})
