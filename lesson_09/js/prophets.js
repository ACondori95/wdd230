const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


function displayProphets(prophets) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let picture = document.createElement('img');

  const birthdt = 'Date of Birth: ';
  const birthplc = 'Place of Birth: ';

  h2.textContent = `${prophets.name} ${prophets.lastname}`;
  card.appendChild(h2);

  p1.textContent = `${birthdt}${prophets.birthdate}`;
  card.appendChild(p1);

  p2.textContent = `${birthplc}${prophets.birthplace}`;
  card.appendChild(p2);

  picture.src = `${prophets.imageurl}`;
  picture.setAttribute('alt', `Portrait of ${prophets.name} ${prophets.lastname} - ${prophets.order}`);
  card.appendChild(picture);

  document.querySelector('div.cards').appendChild(card);
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });