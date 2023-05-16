const API_KEY = `4abe94c2f617dd4c1b315e76afd1f1c2`
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async(city)=>{
   weather.innerHTML = `<h2>Loading...</h2>`
   const url=`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
   const response = await fetch(url)
   const data = await response.json()

   return showWeather(data)
}

const showWeather = (data) => {
   if(data.cod === "404"){
      weather.innerHTML = `<h2>City not found</h2>`
      return
   }
  weather.innerHTML = `
  <div>
       <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"; alt=""/>
  </div>
  <div>
  <h2>${data.main.temp} ºC</h2>
  <h4>${data.weather[0].main}</h4>
  </div>
  `
}

form.addEventListener("submit",function(e){
   getWeather(search.value)  
    e.preventDefault();
})