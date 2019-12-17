var mymap;
//find own position
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showOnMap)
}

function showOnMap(position) {
    mymap = L.map('mapid').setView([position.coords.latitude,
        position.coords.longitude], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11'
    }).addTo(mymap);
    markPosition(position.coords.latitude,
        position.coords.longitude)

}

function markPosition(lat, long) {
    var marker = L.marker([lat, long]).addTo(mymap)
}

function findCityByName(name) {
    //https://nominatim.openstreetmap.org/search.php?q=Kapfenberg&format=json}
}

