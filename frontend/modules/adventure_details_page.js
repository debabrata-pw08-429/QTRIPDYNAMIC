import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  let params = new URLSearchParams(search);
  let id = params.get("adventure");
  // Place holder for functionality to work in the Stubs
  return id;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try {
    let response = await fetch(`${config.backendEndpoint}/adventures/detail?adventure=${adventureId}`);
    let data = await response.json();
    return data;
  } catch (error) {
    // Place holder for functionality to work in the Stubs
    return null;
  }
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  let name = document.getElementById("adventure-name");
  name.textContent = adventure.name;

  let subtitle = document.getElementById("adventure-subtitle");
  subtitle.textContent = adventure.subtitle;

  let gallery = document.getElementById("photo-gallery");
  adventure.images.forEach((imgSrc)=>{
       let div = document.createElement("div");
       let img = document.createElement("img");
       img.setAttribute("class","activity-card-image");
       img.setAttribute("src",imgSrc);
       div.append(img);
       gallery.append(div);
  });

  let content = document.getElementById("adventure-content");
  content.textContent = adventure.content;
}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let gallery = document.getElementById("photo-gallery");
  gallery.textContent = "";

  gallery.innerHTML = `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;

  let parentContainner = document.querySelector(".carousel-inner");
  images.forEach((imgSrc)=> {
      let imgdiv = document.createElement("div");
      imgdiv.setAttribute("class","carousel-item");

      let img = document.createElement("img");
      img.setAttribute("src", imgSrc);
      img.setAttribute("class","d-block w-100 h-650");

      imgdiv.append(img);

      parentContainner.append(imgdiv)
  });

  let activeImg = document.querySelector(".carousel-item");
  activeImg.setAttribute("class","carousel-item active");
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.
  let soldOutPanel = document.getElementById("reservation-panel-sold-out");
  let availablePanel = document.getElementById("reservation-panel-available");

  if(adventure.available){
     soldOutPanel.style.display = "none";
     availablePanel.style.display = "block";
     
     let costPerHead = document.getElementById("reservation-person-cost");
     costPerHead.textContent = adventure.costPerHead;
  } else {
    soldOutPanel.style.display = "block";
    availablePanel.style.display = "none";
  }
}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field
  if(persons === ""){
    persons=0;
  }

  let totalCost = parseInt(adventure.costPerHead) * parseInt(persons);
  document.getElementById("reservation-cost").textContent = totalCost;
}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
  const form = document.getElementById('myForm');

  form.addEventListener('submit', async (e) => {

    e.preventDefault();
    
    const formData = new FormData(form);
    const name = formData.get('name');
    const date = formData.get('date');
    const person = formData.get('person');
    const adventureId = adventure.id; 

    const url = `${config.backendEndpoint}/reservations/new`;
    const requestBody = { name, date, person, adventure: adventureId };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        alert('Success!');
        window.location.reload();
      } else {
        alert('Failed!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't
  const banner = document.getElementById("reserved-banner")
  if(adventure.reserved){
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }
}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
