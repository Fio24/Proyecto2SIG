let MapaProf = L.map('MapaProf').setView([10.01620986717804, -84.10739657709694],7.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(MapaProf);

 