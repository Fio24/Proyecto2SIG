let MapaProfAlta = L.map('MapaProfAlta').setView([10.01620986717804, -84.10739657709694],7.4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(MapaProfAlta);

L.leafletGeotiff('./heapmapProfAlta.tif',{
    image: 'heapmapProfAlta.tif'
}).addTo(MapaProfAlta);


