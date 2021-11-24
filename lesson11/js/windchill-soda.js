fetch('https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=b8d449e8cac37a3509c5ef5885a9af06&units=imperial')
    .then((response) => response.json())
    .then((winfo) => {
        console.log(winfo);

        const tempNumber = document.getElementById("temp").textContent = winfo.main.temp;

        const speedNumber = document.getElementById("speed").textContent = winfo.wind.speed;

        document.getElementById("current").textContent = winfo.weather[0].description;

        document.getElementById("humid").textContent = winfo.main.humidity;

        let windchill = 35.74 + (0.6125 * tempNumber) - (35.75 * Math.pow(speedNumber,0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));       

        windchill = Math.round(windchill);

        console.log(windchill);

        if(tempNumber<=50 && speedNumber > 3){
            document.getElementById("chill").textContent = +windchill+"\xB0F";
           
           }else{
               document.getElementById("chill").textContent = "No Wind Chill Today";
           }
        
        

    })

