// Basic API call to fetch data of a pokemon (ditto)

// As soon as website loads
// window.addEventListener("load", () => {
//   // listen run on page load
//   // Make GET request to PokeAPI
//   const baseURL = "https://pokeapi.co/api/v2/pokemon";
//   // make a fetch request to the pokeAPI
//   fetch(`${baseURL}/ditto`)
//     // one .then to get the JSON
//     .then((response) => response.json())
//     // to actually show the data response
//     .then((data) => {
//       console.log(data);
//     });
//   // code only runs top down if you are not making async calls
//   // if we console.log here it will show first
// });
// )}; Wary of syntax error, order of brackets

// Targeting specific data of the pokemon (ditto) and appending to an HTML element

// window.addEventListener("load", () => {
//   const baseURL = "https://pokeapi.co/api/v2/pokemon";
//   fetch(`${baseURL}/ditto`)
//     .then((response) => response.json())
//     .then((data) => {
//       // Log all available data to console
//       console.log(data);

//       // target our poke div to append new elements
//       const pokemonDiv = document.getElementById("poke");

//       // const for pokemon name
//       const name = data.name;
//       // create HTML and inject name into page
//       const header = document.createElement("h1");
//       header.innerText = name;
//       pokemonDiv.append(header);

//       const shinySprite = data.sprites.front_shiny;
//       // Create img element
//       const img = document.createElement("img");
//       // Set img src as shinySprite
//       img.src = shinySprite;
//       // create HTML and inject img into page
//       // Put image inside
//       pokemonDiv.append(img);
//     });
// });

// Randomising the Pokemon

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", () => {
  const baseURL = "https://pokeapi.co/api/v2/pokemon";
  const randomNumber = randomIntFromInterval(1, 898);
  fetch(`${baseURL}/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      // Log all available data to console
      console.log(data);

      // target our poke div to append new elements
      const pokemonDiv = document.getElementById("poke");

      // const for pokemon name
      const name = data.name;
      // create HTML and inject name into page
      const header = document.createElement("h1");
      header.innerText = name;
      pokemonDiv.append(header);

      const shinySprite = data.sprites.front_shiny;
      // Create img element
      const img = document.createElement("img");
      // Set img src as shinySprite
      img.src = shinySprite;
      // create HTML and inject img into page
      // Put image inside
      pokemonDiv.append(img);
    });
});
