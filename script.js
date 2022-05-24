
//Selectors.
const output = document.getElementById('div-cards');
const search = document.getElementById('search');

// initialise empty array to access api globally.
let hpCharacters = [];


//Search Listener using filter() to get data.
search.addEventListener('keyup', (elem) => {
  const searchItem = elem.target.value.toLowerCase();
  const filteredData = hpCharacters.filter((character) => {
    return character.name.toLowerCase().includes(searchItem.toLowerCase());
  });
  getData(filteredData);
})



//Access data from the api.
const loadData = async () => {
  const data = await fetch('https://hp-api.herokuapp.com/api/characters');
  hpCharacters = await data.json();
  getData(hpCharacters);
  // console.log(characters);

}


//Display api data.
const getData = (hpCharacters) => {
  let cardData = '';
  hpCharacters.map((characters) => {
    let card = `<div class='card' style="height:350px;display:inline-flex;align-items:center;justify-content:center;flex-direction:column;border:2px solid black;">
                    <img style="height:250px;width:200px;" src="${characters.image}">
                    <h3>${characters.name}</h3>
                  </div>`;
    cardData += card;
  })
  output.innerHTML = cardData;
}


//Call api data.
loadData()

