function toggleMenu(){

  document.getElementsByClassName("mainmenu")[0].classList.toggle("hidden");
}

function init(){

  const today = new Date();
      console.log(today);
  
      const dayNumber = today.getDay();
  
      const element = document.getElementById("message");
  
      console.log(dayNumber);
  
  
      if (dayNumber == 0) {
        element.classList.add("showme");
  
      } else {
        element.classList.add("hideme");
      }

      const d = new Date();
      const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      const month = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
document.getElementById("lastupdated").innerHTML = (days[d.getDay()] + ", " + d.getDate() + " " +month[d.getMonth()]+ " " + d.getFullYear());
  
    }

    window.onload = addEventListener("load", init);