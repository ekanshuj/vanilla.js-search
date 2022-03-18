const cards = document.getElementById('div-cards');
const search = document.getElementById('search');
let castCharacters = [];


//fetch request
const fetchedData = () => {
  try {
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then((res) => res.json())
      .then((castCharacters) => {
        outputData(castCharacters);
        // console.log(castCharacters);
      })
  }
  catch (err) {
    console.error(err);
  }
};
fetchedData();

// displayed fetched data
const outputData = (characters) => {
  let cardData = '';
  characters.map((elem) => {
    data = `
        <div class="cards d-inline-block mt-5">
        <div class="card bg-dark text-light" style="width: 18rem;">
          <img src="${elem.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${elem.name}</h5>
            <h6 class="card-title">Played by - ${elem.actor}</h6>
          </div>
        </div>
      </div>
    `
    cardData += data;
  });
  // .join('');
  cards.innerHTML = cardData;
}

//search filter implementation
search.addEventListener('keyup', (e) => {
  const filteredSearch = e.target.value;
  const filteredData = castCharacters.filter((elem) => {
    return elem.name.toLowerCase().includes(filteredSearch) || elem.actor.toLowerCase().includes(filteredSearch);
  })
  outputData(filteredData);
})