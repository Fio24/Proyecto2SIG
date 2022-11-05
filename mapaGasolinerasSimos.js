let MapaGasolineras = L.map('MapaGasolineras').setView([10.01620986717804, -84.10739657709694],7.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(MapaGasolineras);

 
function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}
  //gasolineras en zonas sismicas altas
  var gasolineras = {
    "type": "FeatureCollection",
    "name": "gasolinerasSismosVec",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "cat": 1, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.701200451138192, 10.508399164369791 ] } },
    { "type": "Feature", "properties": { "cat": 2, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.649838366154867, 10.476069073926041 ] } },
    { "type": "Feature", "properties": { "cat": 3, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.277463250025704, 10.357525408965625 ] } },
    { "type": "Feature", "properties": { "cat": 4, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.213260643796531, 10.346748712151042 ] } },
    { "type": "Feature", "properties": { "cat": 5, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.431549504975692, 10.335972015336459 ] } },
    { "type": "Feature", "properties": { "cat": 6, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.431549504975692, 10.325195318521875 ] } },
    { "type": "Feature", "properties": { "cat": 7, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.418708983729871, 10.325195318521875 ] } },
    { "type": "Feature", "properties": { "cat": 8, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.431549504975692, 10.314418621707292 ] } },
    { "type": "Feature", "properties": { "cat": 9, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -85.009372961038196, 10.260535137634374 ] } },
    { "type": "Feature", "properties": { "cat": 10, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -85.009372961038196, 10.249758440819791 ] } },
    { "type": "Feature", "properties": { "cat": 11, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.149058037567357, 10.185098259932291 ] } },
    { "type": "Feature", "properties": { "cat": 12, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.187579601304861, 10.163544866303125 ] } },
    { "type": "Feature", "properties": { "cat": 13, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.213260643796531, 10.077331291786457 ] } },
    { "type": "Feature", "properties": { "cat": 14, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -83.275902592850699, 10.045001201342709 ] } },
    { "type": "Feature", "properties": { "cat": 15, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.084855431338198, 9.926457536382291 ] } },
    { "type": "Feature", "properties": { "cat": 16, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.2389416862882, 9.915680839567708 ] } },
    { "type": "Feature", "properties": { "cat": 17, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.136217516321537, 9.915680839567708 ] } },
    { "type": "Feature", "properties": { "cat": 18, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.084855431338198, 9.861797355494792 ] } },
    { "type": "Feature", "properties": { "cat": 19, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.315984813763194, 9.851020658680209 ] } },
    { "type": "Feature", "properties": { "cat": 20, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -83.853726048913202, 9.797137174607291 ] } },
    { "type": "Feature", "properties": { "cat": 21, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -85.099256609759038, 9.678593509646875 ] } },
    { "type": "Feature", "properties": { "cat": 22, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.5085926324507, 9.527719754242709 ] } },
    { "type": "Feature", "properties": { "cat": 23, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.328825335009029, 9.516943057428126 ] } },
    { "type": "Feature", "properties": { "cat": 24, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.315984813763194, 9.516943057428126 ] } },
    { "type": "Feature", "properties": { "cat": 25, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.174739080059027, 9.452282876540625 ] } },
    { "type": "Feature", "properties": { "cat": 26, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.161898558813192, 9.441506179726041 ] } },
    { "type": "Feature", "properties": { "cat": 27, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.136217516321537, 9.441506179726041 ] } },
    { "type": "Feature", "properties": { "cat": 28, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -84.161898558813192, 9.419952786096875 ] } },
    { "type": "Feature", "properties": { "cat": 29, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -83.712480315209035, 9.387622695653125 ] } },
    { "type": "Feature", "properties": { "cat": 30, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -83.6996397939632, 9.376845998838542 ] } },
    { "type": "Feature", "properties": { "cat": 31, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -83.879407091404858, 9.269079030692708 ] } },
    { "type": "Feature", "properties": { "cat": 32, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -82.916367997967356, 8.805681067665624 ] } },
    { "type": "Feature", "properties": { "cat": 33, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -83.160337901638201, 8.644030615446875 ] } },
    { "type": "Feature", "properties": { "cat": 34, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -83.147497380392366, 8.622477221817707 ] } },
    { "type": "Feature", "properties": { "cat": 35, "value": 1, "label": "" }, "geometry": { "type": "Point", "coordinates": [ -83.301583635342368, 8.536263647301041 ] } }
    ]
    };

var myStyle = {
    "color": "#A865C9",
    "weight": 3,
    "opacity": 1
};

iconMarker = L.icon({
    iconUrl: 'gasolinera.png',
    iconSize: [40, 40],
});



L.geoJSON(gasolineras, {onEachFeature: onEachFeature, style: myStyle}).addTo(MapaGasolineras);