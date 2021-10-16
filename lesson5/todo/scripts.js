var btn = document.getElementById("mybtn");

function init(){

  btn = document.getElementById("mybtn");

 	
  addListeners(); 

}

addListeners = function() {
  btn.addEventListener('click', activate, false);
}

activate = function(){
  let mycup = document.getElementById("theitem").value;
  //console.log(mycup);

  if(mycup !== ""){
    const newBTN = document.createElement("button");
   
    newBTN.innerHTML="\u274C";
    
    const newLI = document.createElement("li");

    newLI.textContent = (mycup);

    newLI.appendChild(newBTN);
   
    document.getElementById("favs").appendChild(newLI);

    document.getElementById("theitem").value = "";
    
  }
}



window.onload = addEventListener("load", init);