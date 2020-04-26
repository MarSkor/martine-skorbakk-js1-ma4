async function fetchGames() {
  try {
    const response = await fetch("https://api.rawg.io/api/games");
    const games = await response.json();
    createGame(games.results);
  } catch (error) {
    console.log(error);
  }
}

fetchGames();

function createGame(games) {
  const gameContainer = document.querySelector(".results");

  let html = "";

  for (let i = 0; i < games.length; i++) {
    html += `<div class="game">
                <h2>${games[i].name}</h2>
                <img src="${games[i].background_image}" alt="${games[i].name}"/>
              </div>`;
  }

  gameContainer.innerHTML = html;
}
