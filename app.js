// NEWS

async function loadNews(){

 const res = await fetch(
 "https://hn.algolia.com/api/v1/search?query=world"
 )

 const data = await res.json()

 const list = document.getElementById("news")

 data.hits.slice(0,5).forEach(n=>{

 const li = document.createElement("li")

 li.textContent = n.title

 list.appendChild(li)

 })

}


// EARTHQUAKE LIST

async function loadQuakes(){

 const res = await fetch(
 "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
 )

 const data = await res.json()

 const list = document.getElementById("quakes")

 data.features.slice(0,5).forEach(q=>{

 const li = document.createElement("li")

 li.textContent = q.properties.place

 list.appendChild(li)

 })

}


// WEATHER

async function loadWeather(){

 const res = await fetch(
 "https://api.open-meteo.com/v1/forecast?latitude=28.6&longitude=77.2&current_weather=true"
 )

 const data = await res.json()

 document.getElementById("weather").innerHTML =
 "Temperature: "+data.current_weather.temperature+"°C"

}


// CRYPTO

async function loadCrypto(){

 const res = await fetch(
 "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
 )

 const data = await res.json()

 const list = document.getElementById("crypto")

 data.slice(0,5).forEach(c=>{

 const li = document.createElement("li")

 li.textContent = c.name+" $"+c.current_price

 list.appendChild(li)

 })

}


// ISS

async function loadISS(){

 const res = await fetch(
 "https://api.open-notify.org/iss-now.json"
 )

 const data = await res.json()

 document.getElementById("iss").innerHTML =
 "Latitude: "+data.iss_position.latitude+
 " Longitude: "+data.iss_position.longitude

}


// DISASTER ALERTS

async function loadDisasters(){

 const res = await fetch(
 "https://www.gdacs.org/xml/rss.xml"
 )

 const text = await res.text()

 const parser = new DOMParser()

 const xml = parser.parseFromString(text,"text/xml")

 const items = xml.querySelectorAll("item")

 const list = document.getElementById("disasters")

 items.forEach((item,i)=>{

 if(i<5){

 const li = document.createElement("li")

 li.textContent =
 item.querySelector("title").textContent

 list.appendChild(li)

 }

 })

}


// LOAD ALL

loadNews()
loadQuakes()
loadWeather()
loadCrypto()
loadISS()
loadDisasters()


setInterval(()=>{

 location.reload()

},60000)
