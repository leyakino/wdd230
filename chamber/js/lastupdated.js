const d = new Date();
      const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      const month = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
document.getElementById("lastupdated").innerHTML = (days[d.getDay()] + ", " + d.getDate() + " " +month[d.getMonth()]+ " " + d.getFullYear());