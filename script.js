async function fetchWeatherData() {
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1e5efed3f2msh1a60b7b201204a2p13c000jsn01b6ba9006f1',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json(); // Parse the JSON response

    // Update the DOM with the retrieved data
    cloud_pct.innerHTML = data.cloud_pct;
    temp.innerHTML = data.temp;
    feels_like.innerHTML = data.feels_like;
    humidity.innerHTML = data.humidity;
    min_temp.innerHTML = data.min_temp;
    max_temp.innerHTML = data.max_temp;
    wind_speed.innerHTML = data.wind_speed;
    wind_degrees.innerHTML = data.wind_degrees;
    sunrise.innerHTML = data.sunrise;
    sunset.innerHTML = data.sunset;
  } catch (error) {
    console.error(error);
  }
}

fetchWeatherData();
