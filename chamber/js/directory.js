const requestData = "https://acondori95.github.io/wdd230/chamber/data/data.json";

function displayBusiness(business) {
  let card = document.createElement('section');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');
  let img1 = document.createElement('img');

  p4.textContent = `${business.name}`;
  p4.setAttribute('id','bizname');
  card.appendChild(p4);

  img1.src = `${business.icon}`;
  img1.setAttribute('alt', `${business.name} icon`);
  img1.setAttribute('loading', 'lazy');
  card.appendChild(img1);

  p1.textContent = `${business.address}`;
  card.appendChild(p1);

  p2.textContent = `${business.phone}`;
  card.appendChild(p2);

  p3.textContent = `${business.website}`;
  card.appendChild(p3);

  document.querySelector('#bizdir').appendChild(card);
}

console.log('Load Directory');
getDirectory();

async function getDirectory() {
  console.log('get data');
  const response = await fetch(requestData);
  const business_dir = await response.json();
  business_dir.forEach(displayBusiness);
}