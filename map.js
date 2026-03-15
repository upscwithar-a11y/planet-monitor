const map = L.map("map").setView([20,0],2)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{

 attribution:"© OpenStreetMap"

}).addTo(map)


// EARTHQUAKES

async function loadEarthquakes(){

 const res = await fetch(
 "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
 )

 const data = await res.json()

 data.features.forEach(q=>{

 const lat = q.geometry.coordinates[1]
 const lon = q.geometry.coordinates[0]

 L.circle([lat,lon],{

 radius:40000,
 color:"red"

 }).addTo(map)

 })

}

loadEarthquakes()



// AIR QUALITY

async function loadAir(){

 const res = await fetch(
 "https://api.openaq.org/v2/latest"
 )

 const data = await res.json()

 data.results.slice(0,100).forEach(a=>{

 const lat = a.coordinates.latitude
 const lon = a.coordinates.longitude

 L.circle([lat,lon],{

 radius:20000,
 color:"purple"

 }).addTo(map)

 })

}

loadAir()
