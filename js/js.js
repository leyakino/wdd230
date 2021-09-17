function initialize(){

let myDate = new Date();
let myYear = myDate.getFullYear();
//console.info('test: '+myYear);
document.getElementById("yearly").textContent = myYear;

var string = document.lastModified;
//console.log(document.lastModified);
document.getElementById("lastupdated").textContent = (document.lastModified);
}


window.onload = addEventListener("load", initialize);