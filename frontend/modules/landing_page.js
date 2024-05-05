import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    const response = await fetch(`${config.backendEndpoint}/cities`);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let cityH5 = document.createElement("h5");
  cityH5.innerText = city;

  let descriptionh6 = document.createElement("h6");
  descriptionh6.innerText = description;

  let tileTextDiv = document.createElement("div");
  tileTextDiv.setAttribute("class", "tile-text");
  tileTextDiv.append(cityH5);
  tileTextDiv.append(descriptionh6);

  let img = document.createElement("img");
  img.setAttribute("src", image);

  let anchorTag = document.createElement("a");
  anchorTag.setAttribute("href",`pages/adventures/?city=${id}`);
  anchorTag.setAttribute("id", id);
  anchorTag.append(img,tileTextDiv);

  let cardDiv = document.createElement("div");
  cardDiv.setAttribute("class","col-sm-6 col-lg-3 my-4 tile");
  cardDiv.append(anchorTag);
  let parentContainer = document.getElementById("data");
  parentContainer.append(cardDiv);
}

export { init, fetchCities, addCityToDOM };
