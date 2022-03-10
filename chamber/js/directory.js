const requestData = "https://acondori95.github.io/wdd230/chamber/data/data.json";

function displayBusiness(business) {
  let card = document.createElement('section');
  let h2 = document.createElement('h3');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');
  let a = document.createElement('a');
  let img1 = document.createElement('img');

  h2.textContent = `${business.name}`;
  h2.setAttribute('id','bizname');

  card.appendChild(h2);

  img1.src = `${business.icon}`;
  img1.setAttribute('alt', `${business.name} icon`);
  img1.setAttribute('loading', 'lazy');
  card.appendChild(img1);

  p1.textContent = `${business.address}, ${business.city}`;
  card.appendChild(p1);

  p2.innerHTML = `${business.address}<br>${business.city}`;
  card.appendChild(p2);

  p3.textContent = `${business.phone}`;
  card.appendChild(p3);

  a.href = `${business.website}`;
  a.target = '_blank';
  a.textContent = `${business.contact}`;

  card.appendChild(p4);
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