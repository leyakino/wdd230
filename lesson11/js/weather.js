const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b8d449e8cac37a3509c5ef5885a9af06";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

  const imageico = jsObject.list[0].weather[0].icon;
  const imagesrc = 'https://openweathermap.org/img/w/'+imageico+'.png';

  const desc = jsObject.list[0].weather[0].description;
  console.log(desc);

  const temp = jsObject.list[0].main.temp;


  document.getElementById('imagesrc').innerHTML = imagesrc;
  document.getElementById('icon').setAttribute('src', imagesrc);
  document.getElementById('current-temp').textContent = temp;
  document.getElementById('descr').textContent = desc;

  });

/*apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b8d449e8cac37a3509c5ef5885a9af06';
var img;
fetch(apiURL).then((response) => response.json()).then((jsObject) => {
  const imageico = jsObject.list[0].weather[0].icon;
  const imagesrc = 'https://openweathermap.org/img/w/'+imageico+'.png';

  document.getElementById('imagesrc').innerHTML = imagesrc;
  document.getElementById('icon').setAttribute('src', imagesrc);
  document.getElementById('current-temp').innerHTML = jsObject.list[0].main.temp;
});*/