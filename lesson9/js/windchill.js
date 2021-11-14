function loadwc(){

const tempNumber = parseFloat(document.getElementById("temp").textContent);
//console.log(temp);

const speedNumber = parseFloat(document.getElementById("speed").textContent);
//console.log(speed);

let windchill = 35.74 + (0.6125 * tempNumber) - (35.75 * Math.pow(speedNumber,0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));

windchill = Math.round(windchill);

if(tempNumber<=50 && speedNumber > 3){
    document.getElementById("chill").textContent = +windchill+"\xB0F";
   
   }else{
       document.getElementById("chill").textContent = "No Wind Chill Today";
   }

}


   window.onload = addEventListener("load", loadwc);

