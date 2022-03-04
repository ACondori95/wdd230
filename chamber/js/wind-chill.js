let tempF = parseFloat(document.getElementById('tempnow').innerHTML);
let windspeed = parseFloat(document.getElementById('wspeed').innerHTML);
let wchill = 35.74 + 0.6215 * tempF - 35.75 * (windspeed ** 0.16) + 0.4275 * tempF * (windspeed ** 0.16);

if (tempF > 50 || windspeed < 3) {
  document.getElementById('windchill').textContent = 'N/A';
} else {
  let strChill = wchill.toFixed(0) + 'º F';
  document.getElementById('windchill').textContent = strChill;
}