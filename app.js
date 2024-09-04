
const apiKey = "d9c62ab754c457a08e5cf1ea68213648"
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" 

  async function weatherSearch(city) {
    const res = await fetch(url+city+"&appid="+apiKey)
    let data =await res.json();
    console.log(data)
    if(res.status == 404) {
        weather.style.display = "none";
        error.style.display = "block";
    } else {
        weather.style.display = "block";
        error.style.display = "none";
    }
    document.querySelector(".temp").innerHTML= data.main.temp;
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/hr"
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
    if(data.weather[0].main == "Mist") {
        document.querySelector(".weather-icon").src = "/assets/mist.png"
    }
    else if(data.weather[0].main == "Thunderstorm") {
        document.querySelector(".weather-icon").src = "/assets/drizzle.png"
    }
    else if(data.weather[0].main == "Rain") {
        document.querySelector(".weather-icon").src = "/assets/rain.png"
    }
    else if(data.weather[0].main == "Snow") {
        document.querySelector(".weather-icon").src = "/assets/snow.png"
    }
    else if(data.weather[0].main == "Clouds") {
        document.querySelector(".weather-icon").src = "/assets/clouds.png"
    }
     else if(data.weather[0].main == "Clear") {
        document.querySelector(".weather-icon").src = "/assets/clear.png"
    }
    
  }

  let btn = document.querySelector("button")
  let search = document.querySelector(".search-bar")
  let weather = document.querySelector(".weather")
  let error = document.querySelector(".error")

  btn.addEventListener("click", ()=> {
    weatherSearch(search.value);
   
    search.value = ""
  })
