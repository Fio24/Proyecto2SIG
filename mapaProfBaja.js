let MapaProfBaja = L.map('MapaProfBaja').setView([10.023454045258013, -84.36061211034229],7.8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(MapaProfBaja);

var imageUrl = './profBaja.png';
var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';

var latLngBounds = L.latLngBounds([[11.209489666624496, -86.05349667691863],[8.188487038714001, -82.84548892790016]]);

var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
    opacity: 0.5,
    errorOverlayUrl: errorOverlayUrl,
    interactive: true
}).addTo(MapaProfBaja);