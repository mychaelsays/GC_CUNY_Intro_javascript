let poemMap;
poemMap = L.map("map");
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(poemMap);

poemMap.setView([40.7128, -74.0060], 16);
const timesSquare = L.marker([40.7580, -73.9855]).addTo(poemMap);
timesSquare.bindPopup("<b>Times Square</b>");
const circle = L.circle([40.7580, -73.9855], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(poemMap);
const polyline = L.polyline([
    [40.7580, -73.9855],
    [40.7486, -73.9840]
], {
    color: 'blue'
}).addTo(poemMap);
polyline.bindPopup("<b>Times Square to the Graduate Center</b>");
circle.bindPopup("I'm a circle!");
const latLng = timesSquare.getLatLng();
console.log(latLng.lat);
console.log(latLng.lng);
poemMap.panTo(timesSquare.getLatLng());
poemMap.on('click', function(e) {
    const latLng = e.latlng;
    console.log(latLng.lat);
    console.log(latLng.lng);
});

const sakuraPark = L.marker([40.81259, -73.96216]).addTo(poemMap);
sakuraPark.bindPopup("<b>Sakura Park</b>");

const bookCulture = L.marker([40.80660, -73.96526]).addTo(poemMap);
bookCulture.bindPopup("<b>Book Culture on Broadway</b>");

const astoriaPark = L.marker([40.77850, -73.92233]).addTo(poemMap);
astoriaPark.bindPopup("<b>Astoria Park</b>");

const parktoSubway = L.polyline([
    [40.77850, -73.92233],
    [40.776922098149704, -73.92129292133158],
    [40.773154254954036, -73.91640593654262],
    [40.771571900245384, -73.91712745074291],
    [40.770442494439, -73.91784628286545]
], {
    color: 'red'
}).addTo(poemMap);
parktoSubway.bindPopup("<b>Astoria Park to the Astoria Blvd. Subway Station</b>");
