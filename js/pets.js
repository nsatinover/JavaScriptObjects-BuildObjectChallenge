/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/
const pets =
  [
    { name: 'Rhili', type: 'aussie', breed: 'good boy', age: 1, photo: 'aussie.jpg' },
    { name: 'Dash', type: 'dachshund', breed: 'gooder boy', age: 2, photo: 'dachshund.jpg' },
    { name: 'Goldie', type: 'golden', breed: 'great boy', age: 3, photo: 'golden.jpg' },
    { name: 'Persey', type: 'persian', breed: 'nice boy', age: 4, photo: 'persian.jpg' },
    { name: 'Jasper', type: 'pug', breed: 'little boy', age: 12, photo: 'pug.jpg' }
  ]

// document.querySelector('main').innerHTML = getPets(pets);
document.querySelector('main').insertAdjacentHTML('beforeend', getPets(pets));


function getPets(arr) {
  let htmlElem = '';

  arr.forEach(thisDog => {

    htmlElem +=
      `
    <h2>${thisDog.name}</h2>
    <h3>Dog | ${thisDog.type}</h3>
    <p>Age: ${thisDog.age}</p>
    <img src="img/${thisDog.photo}" alt="${thisDog.breed}">
    `

  });

  return htmlElem;
}
