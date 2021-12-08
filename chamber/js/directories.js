const requestURL = "https://leyakino.github.io/wdd230/chamber/js/directories.json";
fetch(requestURL)
.then(function(response){
return response.json();
})
.then(function(jsonObject){
console.table(jsonObject);
const directories = jsonObject["directories"];
for (let i = 0; i < directories.length; i++ ) {
  console.table(i);

    let card = document.createElement("section");
  let text = document.createElement("div");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let p6 = document.createElement("p");
    let div = document.createElement("div");
    let image = document.createElement("img");
    
    
    image.setAttribute('src', directories[i].photo);
    image.setAttribute('alt', `${directories[i].name}`);
    h2.textContent = `${directories[i].name}`;
    //p1.textContent = `Company: ${directories[i].name}`;
    //p1.innerHTML = `<strong>Company:</strong> ${directories[i].name}`;
    p2.innerHTML = `<strong>Slogan:</strong> ${directories[i].slogan}`;
    p3.innerHTML = `<strong>About:</strong> ${directories[i].about}`;
    p4.innerHTML = `<strong>Address:</strong> ${directories[i].address}`;
    p5.innerHTML = `<strong>Phone:</strong> ${directories[i].phone}`;
    p6.innerHTML = `<strong>URL:</strong> ${directories[i].url}`;
    
    card.appendChild(text);
    text.appendChild(h2);
    //text.appendChild(p1);
    text.appendChild(p2);
    text.appendChild(p3);
    text.appendChild(p4);
    text.appendChild(p5);
    text.appendChild(p6);
    div.appendChild(image);
    document.querySelector("div.directories").appendChild(card);
    console.log(card);
}
})
