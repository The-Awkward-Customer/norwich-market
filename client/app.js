// Prints a welcome message to the console to confirm the script is running
console.log("hello world from Fi, Natalie and Pete!");

// consts for DOM elements
const searchBar = document.getElementById("searchbar");
const searchInput = document.getElementById("search");
const stallList = document.getElementById("stallList");

function scrollToStallList() {
  const stallListElement = document.querySelector(".stallList");

  // Get the position of the .stallList element relative to the document
  const topOffset = stallListElement.getBoundingClientRect().top;

  // Scroll to the top offset of the .stallList element
  window.scrollTo({
    top: topOffset,
    behavior: "smooth", // Optional: Add smooth scrolling behavior
  });
}
// smaller function for card creation
function createStallCard(stall) {
  const card = document.createElement("a");
  const img = document.createElement("img");

  const cont_wrap = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  const waitTime = document.createElement("h4");

  card.classList.add("stallCard");
  img.classList.add("stallImage");
  cont_wrap.classList.add("cont_wrap");
  h3.classList.add("card_title");
  p.classList.add("descr");

  h3.textContent = stall.trading_name;
  p.textContent = stall.categories;
  img.src = stall.profile_pic;
  waitTime.textContent = stall.avg_wait;

  waitTime.classList.add("card_wait_time");

  card.appendChild(img);

  card.appendChild(cont_wrap);
  cont_wrap.appendChild(h3);
  cont_wrap.appendChild(p);
  card.appendChild(waitTime);

  card.classList.add("stallCard");
  card.setAttribute("href", `/profile?/${stall.customer_uid}`);

  scrollToStallList();
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
  const response = await fetch(
    "https://norwich-market-server.onrender.com/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchTerm }),
    }
  );

  const stalls = await response.json();
  clearStallList(); // Clear the stall list before rendering new results

  // Render the fetched stalls on index.html
  stalls.forEach(createStallCard);
});

// Function to load and display all stalls
async function displayCards() {
  const response = await fetch(
    "https://norwich-market-server.onrender.com/customers"
  );
  const stalls = await response.json();

  stalls.forEach(createStallCard); // Render the fetched stalls
}

// Initial load of stalls when the page is loaded
displayCards();
