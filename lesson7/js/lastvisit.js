const millisecondsToDays = 86400000;
const lastvisit = localStorage.getItem("lastvisit");

const todayvisit = (Date.now() / millisecondsToDays);

const numbersofvisit = todayvisit - lastvisit;

localStorage.setItem("lastvisit", todayvisit);

document.getElementById("bwisit").textContent = Math.round(numbersofvisit);

//console.log(numbersofvisit);