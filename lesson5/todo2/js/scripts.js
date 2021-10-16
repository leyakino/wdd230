var btn = document.getElementById("mybtn");

function init(){

  btn = document.getElementById("mybtn");	

  addListeners(); 

}

addListeners = function() {
  btn.addEventListener("click", activate, false);
}

var counter = 0;
activate = function(){
  let mycup = document.getElementById("theitem").value;
  //console.log(mycup);

  if(mycup !== ""){
    counter++;
    const newBTN = document.createElement("button");
   
    newBTN.innerHTML="\u274C";
    newBTN.setAttribute("onclick", "javascript:delete_li("+counter+")");
    
    const newLI = document.createElement("li");

    newLI.textContent = (mycup);
    newLI.setAttribute("id", "favs_item_"+counter);
    
    newLI.appendChild(newBTN);

    document.getElementById("theitem").focus(); 
   
    document.getElementById("favs").appendChild(newLI);

    document.getElementById("theitem").value = "";
    
  }
}



function delete_li(ctr){
  var item = document.getElementById("favs_item_"+ctr);
  item.remove();
  document.getElementById("theitem").focus(); 
}

window.onload = addEventListener("load", init);