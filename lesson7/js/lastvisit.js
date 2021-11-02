
function loadvisit(){
const millisecondsToDays = 86400000;
const lastvisit = localStorage.getItem("lastvisit");

const todayvisit = Math.round((Date.now() / millisecondsToDays));

const numbersofvisit = todayvisit - lastvisit;

localStorage.setItem("lastvisit", todayvisit);

document.getElementById("bwisit").textContent = numbersofvisit;

//console.log(numbersofvisit);
}

window.onload = addEventListener("load", loadvisit);