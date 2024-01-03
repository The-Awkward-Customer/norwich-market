// Checks that JS file is working
console.log("hello world from Fi, Natalie and Pete!");

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const stallList = document.getElementById("stallList");

// searchForm.addEventListener("submit", async function (event) {
//   event.preventDefault();

//   // Get the search term from the input in html
//   const searchTerm = searchInput.value;

//   // Send the search term to the server
//   const response = await fetch("https://localhost:8080/search", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ searchTerm }),
//   });
// //returns the stalls which match the search request
//   const stalls = await response.json();

//   // Clear existing stallList content
//   stallList.innerHTML = "";

//   // Render the fetched stalls on index.html
//   stalls.forEach(function (stall) {
//     const card = document.createElement("div");
//     const h3 = document.createElement("h3");
//     const p = document.createElement("p");
//     const img = document.createElement("img");

//     h3.textContent = stall.trading_name;
//     p.textContent = stall.categories;
//     img.src = stall.profile_pic;

//     stallList.appendChild(card);
//     card.appendChild(h3);
//     card.appendChild(p);
//     card.appendChild(img);
// //create more DOM nodes and append as needed - wait for Pete to create fields in DB
//   });
// });

// Initial load of stalls - should we change this to get all stalls for browsing?
async function displayCards() {
  // Fetch all stalls from the server
  const response = await fetch("http://localhost:8080/customers");
  const stalls = await response.json();
  console.log(stalls);

  // Render the fetched stalls
  stalls.forEach(function (stall) {
    const card = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h3.textContent = stall.trading_name;
    p.textContent = stall.categories;
    img.src = stall.profile_pic;

    stallList.appendChild(card);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(img);
  });
}

// Initial load when the page is loaded
displayCards();
