
const imgs = ["images/home/sodasprings.jpg", "images/home/springfield.jpg", "images/home/fishhaven.jpg"];

//console.log(imgs);

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL, imgs)
.then(function(response){
return response.json();
})
.then(function(jsonObject){
console.table(jsonObject);
const town = jsonObject["towns"];
for (let i = 0; i < 3; i++ ) {
  console.table(i);

  let card = document.createElement("section");
  let text = document.createElement("div");
  let h2 = document.createElement("h2");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let div = document.createElement('div');
  let image = document.createElement("img");

  h2.textContent = `${town[i].name}`;
  p1.textContent = `${town[i].motto}`;
  p2.textContent = `Year Founded: ${town[i].yearFounded}`;
  p3.textContent = `Population: ${town[i].currentPopulation}`;
  p4.textContent = `Annual Rain Fall: ${town[i].averageRainfall}`;
  image.setAttribute('src', imgs[i]);
  image.setAttribute('alt', `${town[i].name}`);

  card.appendChild(text);
  text.appendChild(h2);
  text.appendChild(p1);
  text.appendChild(p2);
  text.appendChild(p3);
  text.appendChild(p4);
  card.appendChild(div);
  div.appendChild(image);
  document.querySelector('div.cards').appendChild(card);
}
})
