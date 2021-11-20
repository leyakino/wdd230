//ADD the key and change units to imperial
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=b8d449e8cac37a3509c5ef5885a9af06&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherinfo);
    
    document.getElementById("place").innerHTML = weatherinfo.city.name;

    document.getElementById("currentTemp").innerHTML = weatherinfo.list[0].main.temp;

    document.getElementById("windSpeed").innerHTML = weatherinfo.list[0].wind.speed;

    const iconcode = weatherinfo.list[0].weather[0].icon;

    console.log(iconcode);

    const iconpath = "https://openweathermap.org/img/w/" + iconcode  + ".png";

    console.log(iconpath);

    document.getElementById("weather_icon").src = iconpath;

 }); //end of "then" fat arrow function



