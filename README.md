# QTripDynamic

QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. 

- **Website URL :** https://deb-qtrip-dynamic-frontend.netlify.app/

# During the course of this project

- Created web pages using HTML and CSS and made them dynamic using JavaScript
- Improved UX with multi-select filters, image carouselsImplemented conditional rendering of page elements
- Implemented conditional rendering of page elements
- Utilized localStorage to persist user preferences at client-side and facilitated reservation form submission using fetch API.
- Deployed the website using Netlify/Vercel for Frontend and Render for Backend.    

# QTripDynamic Architecture Diagram
![Layered Architechture](https://directus.crio.do/assets/5ea9a041-3677-44dd-be8c-2f41b84977e9?)

# 1. Fetch data using REST API and dynamically render landing page
  ### Scope of Work
     - Retrieved cities data from the backend REST API endpoint using Javascript’s Fetch API
     - Created HTML for the cities grid with Bootstrap class to add responsiveness
     - Implemented logic to dynamically plug in city data to the Landing page’s DOM
 ### Skills used
     - HTML, CSS, JS, Bootstrap, REST APIs, JSON, DOM Manipulation, cURL

 ### Basic Overview
 ![secure-api-endpoints](https://directus.crio.do/assets/2ea56c1c-96f7-4a02-ae6f-6889bad99423?)

# 2. Implement the adventures page with multi-select filters
  ### Scope of Work
      - Fetched adventures data for the city by invoking the backend API from the page URL’s query parameter
      - Inserted HTML populated with API response data to the adventure page’s DOM
      - Implemented logic to add both multi-select and single-select filters
      - Added logic to persist the filters selected by the user in the browser’s localStorage
 ### Skills used
     - DOM Manipulation, Bootstrap Flex, Bootstrap Spacing, ES6, localStorage
     
 ### Basic Overview
 ![secure-api-endpoints](https://directus.crio.do/assets/f6f858c6-409b-4a0f-bbbd-8bc8b8c59739?)


# 3. Create the Adventure details page with reservation support and the Reservations page to show all reservations
  ### Scope of Work
     - Added a sleek image carousel using Bootstrap2
     - Implemented reservation logic by using Fetch API to send a POST request to the backend, on form submission
     - Conditionally rendered the “Sold out” panel and the reservations page based on the API response
 ### Skills used
     - JS, Bootstrap, Conditional rendering, Bootstrap Carousel
     
 ### Basic Overview
 ![secure-api-endpoints](https://directus.crio.do/assets/dd79cabf-8e7d-49a1-bf5c-9013ceafa19a?)
 ![secure-api-endpoints](https://directus.crio.do/assets/dbe1d87d-b815-47dd-929a-1f63a57b58a0?)
 ![secure-api-endpoints](https://directus.crio.do/assets/26d7adc8-3889-411f-9409-0eeef8b4360d?)
     
# 4. Deploy the QTripDynamic website
  ### Scope of Work
     - Deployed the QTripDynamic to render
     - Configured the QTrip dynamic frontend to use the render deployed backend
     - Deployed the QTrip dynamic frontend to Netlify
 ### Skills used
     - Deployment, Render, Netlify
