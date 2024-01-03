// Prints a welcome message to the console to confirm the script is running
console.log("hello world from Fi, Natalie and Pete!");

// consts for DOM elements
const searchBar = document.getElementById("searchbar");
const searchInput = document.getElementById("search");
const stallList = document.getElementById("stallList");

// smaller function for card creation
function createStallCard(stall) {
  const card = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const img = document.createElement("img");
  const customer_uid = document.createElement("h4");

  h3.textContent = stall.trading_name;
  p.textContent = stall.categories;
  img.src = stall.profile_pic;
  customer_uid.textContent = stall.customer_uid;

  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(img);
  card.appendChild(customer_uid);

  stallList.appendChild(card);
}

// Function to clear all stall cards from the list
function clearStallList() {
  stallList.innerHTML = "";
}

// Event listener for the search bar submit event
searchBar.addEventListener("submit", async function (event) {
  event.preventDefault();
  const searchTerm = searchInput.value;
  const response = await fetch("http://localhost:8080/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ searchTerm }),
  });

  const stalls = await response.json();
  clearStallList(); // Clear the stall list before rendering new results

  // Render the fetched stalls on index.html
  stalls.forEach(createStallCard);
});

// Function to load and display all stalls
async function displayCards() {
  const response = await fetch("http://localhost:8080/customers");
  const stalls = await response.json();

  stalls.forEach(createStallCard); // Render the fetched stalls
}

// Initial load of stalls when the page is loaded
displayCards();
