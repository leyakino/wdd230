
function listver(){
    document.querySelector(".directories").classList.add("list");
    /*
    document.querySelector("#direct .directories").style.display = "block";
    
    document.querySelector(".directories section").style.cssText = `
    display: grid;
        grid-template-columns: repeat(3, 1fr);
    `;
    
    document.querySelector(".directories section").style.cssText = `
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 35px;
        margin-bottom: 35px;
    `;*/
    
    /*let rep = document.querySelector("#direct .directories section div:nth-child(2)");
    

    //rep = `grid-column: 2/-1;`;
    
    for(let i = 0; i > rep.length; i++){
        rep[i].style.gridColumn = 2/-1;
        
        console.log(i);
        console.log("aquino");
    }>*/
    
   
     /*document.querySelector("#direct .directories section div:nth-child(2)").style.cssText = `
        grid-column: 2/-1;
    `;*/
    
    /*
    let line = document.querySelector("#direct .directories");
    let line2 = document.querySelector(".directories section");
    let line3 = document.querySelector("#direct .directories section div:nth-child(2)");
    
    line.style.display = "block";
    line2.style.display = "grid";
    line2.style.gridTemplateColumns = "repeat(3, 1fr)";
    line3.style.gridColumn = "2/-1";
    
   // console.log(line);
    console.log(line2);
    */
}

function gridver(){
    document.querySelector(".directories").classList.remove("list");
    
}