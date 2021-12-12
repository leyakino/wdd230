const requestUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat=14.52&lon=121.15&appid=b8d449e8cac37a3509c5ef5885a9af06&units=imperial";

fetch(requestUrl)
  .then((response) => response.json())
  .then((jsonObject) => {
    const dailyforecast = jsonObject.current;
    const forecasting = jsonObject.daily.slice(0, 3);
    alerts = jsonObject.alerts;    
    console.log(jsonObject);
    
    
    const tempNumber = document.getElementById("temp").textContent = dailyforecast.temp;

    document.getElementById("current").textContent = dailyforecast.weather[0].description;

    document.getElementById("humid").textContent = dailyforecast.humidity;
    
    
    
    
    
    
    const d = new Date();

    const numbernow = d.getDay();

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let weekend = numbernow;
    
    

    forecasting.forEach((current) => {
      weekend += 1;
        let exact = weekend - 1;
      if (weekend === 7) {
        weekend = 0;
      }
      const weatherbox = document.createElement("div");
      weatherbox.classList = "weathercontainer";
      const weekdays = document.createElement("h4");
      weekdays.textContent = weekday[exact];

      const iconPath =   "https://openweathermap.org/img/wn/" + current.weather[0].icon + ".png";
       
      const icon = document.createElement("img");
      icon.src = iconPath;
      icon.alt = current.weather[0].description;

      const temp = document.createElement("p");

      weatherbox.appendChild(weekdays);
      weatherbox.appendChild(icon);
      weatherbox.appendChild(temp);

      document.querySelector(".weathcont").appendChild(weatherbox);
    });
  });
