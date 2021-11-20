fetch('https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b8d449e8cac37a3509c5ef5885a9af06')
    .then((response) => response.json())
    .then((willemdefoe) => {
        console.log(willemdefoe);
        
        document.getElementById("place").textContent = willemdefoe.city.name;

        var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

         let forecast = [];
          let icon = [];
          let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
         let list = willemdefoe.list;
        let day = 1;
        let ico = 1;
        let d = 1;
        

      for (let i = 1; i <= 5; i++) {
      
        willemdefoe.list.forEach(x => {
            if (x.dt_txt.includes('18:00:00')) {
                forecast[day] = x.main.temp;
                day++;
                icon[ico] = x.weather[0].icon;
                ico++;

                 days[d] = new Date(x.dt_txt);
                  n = weekday[days[i].getDay ()];
                  document.getElementById('day' + i ).innerHTML =  n ;
                   d++;
            }
            
           let imagesrc = 'https://openweathermap.org/img/w/' +  icon[i] + '.png';
           
           document.getElementById("weatherimage" + i).setAttribute('src', imagesrc);
            document.getElementById('forecastday' + i ).innerHTML = forecast[i];
             
              

        })};

  

    });