// Initialize the map and set its view
const map = L.map('map').setView([40.7128, -74.0060], 13); // Default coordinates to New York City

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example of adding a NASA data layer (replace with actual URL)
L.tileLayer.wms("https://sedac.ciesin.columbia.edu/geoserver/wms", {
    layers: 'gpw-v4:gpw-v4-population-density_2020',
    format: 'image/png',
    transparent: true,
    attribution: 'SEDAC / NASA'
}).addTo(map);

// Example of adding another open data layer (e.g., pollution data)
L.tileLayer.wms("https://worldview.earthdata.nasa.gov/wms", {
    layers: 'MODIS_Terra_Aerosol',
    format: 'image/png',
    transparent: true,
    attribution: 'NASA Worldview'
}).addTo(map);
