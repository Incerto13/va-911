// Openweathermap API
export default function weatherService() {
  const city = "Richmond";
  const apiKey = "6befa011b9a58b55a058613d57a609fa";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  console.log(`getWeather() function was launched and cit is... ${city}`);

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const temp = Math.round(data.main.temp);
      const maxTemp = Math.round(data.main.temp_max);
      const minTemp = Math.round(data.main.temp_min);
      const wind = Math.round(data.wind.speed);
      const description = data.weather[0].description;

      const weather = {
        description,
        temp,
        maxTemp,
        minTemp,
        wind
      };
      console.log(weather);

      return weather;
    })
    .catch(error => {
      console.error(error);
    });
}
