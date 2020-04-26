async function fetchGames() {
  try {
    const response = await fetch("https://api.rawg.io/api/games/4200");
    const game = await response.json();
    createGameDetails(game);
  } catch (error) {
    console.log(error);
  }
}
fetchGames();

function createGameDetails(game) {
  console.log(game);
  const gameHeading = document.querySelector("h1");
  gameHeading.innerHTML = game.name;

  const gameDescription = document.querySelector(".description");
  gameDescription.innerHTML = game.description;

  const newImg = document.querySelector(".image");
  const imgPath = game.background_image;
  newImg.style.backgroundImage = `url(${imgPath})`;
}
