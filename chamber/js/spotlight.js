const spotlightData = 'https://acondori95.github.io/wdd230/chamber/data/data.json';
const spotFilled = 0;

function displaySpotlight(business, card) {

  let h3 = document.createElement('h3');
  let img1 = document.createElement('img');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');
  let a = document.createElement('a');

  h3.textContent = `${business.name}`;
  h3.setAttribute('id', 'bizname');
  card.appendChild(h3);

  img1.src = `${business.icon}`;
  img1.setAttribute('alt',`${business.name} icon`);
  img1.setAttribute('loading','lazy');
  card.appendChild(img1);

  p1.textContent = `${business.address}`;
  card.appendChild(p2);

  p2.textContent = `${business.phone}`;
  card.appendChild(p2);

  a.href = `${business.website}`;
  a.target = '_blank';
  a.textContent = `${business.website}`;
  card.appendChild(a);

  p3.textContent = `${business.contact}`;
  card.appendChild(p3);

}

function findSpotlight(business) {
  console.log(business.name);
  if ((business.membership != 'Gold' && business.membership != 'Silver') || spotFilled == 3)
      return;
  else {
    console.log(business.membership);
    if (spotFilled == 0) {
      let bizCard = document.querySelector('#spotlight1');
      displaySpotlight(business, bizCard);
    }
    if (spotFilled == 1) {
      let bizCard = document.querySelector('#spotlight2');
      displaySpotlight(business, bizCard);
    }
    if (spotFilled == 2) {
      let bizCard = document.querySelector('#spotlight3');
      displaySpotlight(business, bizCard);
    }
    spotFilled++;
  }
}

console.log('Load Spotlight');
getSpotlight();

async function getSpotlight() {
  console.log('get data');
  const response = await fetch(spotlightData);
  let bizList = await response.json();
  const shuffledList = bizList.sort((a, b) => 0.5 - Math.random());
  shuffledList.forEach(findSpotlight);
}