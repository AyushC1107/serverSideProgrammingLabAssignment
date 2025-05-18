function fetchWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY")
      .then(response => response.json())
      .then(data => {
        let temp = data.main.temp - 273.15;
        document.getElementById("weatherData").innerText = `Temperature: ${temp.toFixed(2)}°C`;
      })
      .catch(error => console.error("Error fetching weather data:", error));
  }
  