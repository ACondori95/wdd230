/*const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=e6e82e7efa65c4de43967a31ac32a4e3';*/
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=e6e82e7efa65c4de43967a31ac32a4e3';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("current-temp").textContent = jsObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
});

