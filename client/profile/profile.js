console.log("hello world");

var currentUrl = window.location.href;
console.log(currentUrl);

var parts = currentUrl.split("/");
console.log(parts);

var lastPart = parts.pop(); // This is the part after the last '/'
console.log(lastPart);

async function getCustomerUid() {
  const response = await fetch(
    `https://norwich-market-server.onrender.com/profile/${lastPart}`
  );
  const customerData = await response.json();
  console.log(customerData);
  return customerData[0];
}

async function renderProfile() {
  const customerData = await getCustomerUid();
  // console.log("rendering profile:", customerData)
  // console.log("Trading Name is", customerData.trading_name)
  const logo = document.getElementById("logo");
  const name = document.getElementById("name");
  const waitTime = document.getElementById("waitTime");
  const mobileNumber = document.getElementById("mobileNumber");
  const email = document.getElementById("email");
  const cash = document.getElementById("cash");
  const card = document.getElementById("card");
  const categories = document.getElementById("categories");
  const description = document.getElementById("description");

  logo.src = customerData.profile_pic;
  name.textContent = customerData.trading_name;
  waitTime.textContent = customerData.avg_wait;
  mobileNumber.textContent = customerData.mobile_num;
  email.textContent = customerData.email;
  categories.textContent = customerData.categories;
  description.textContent = customerData.description_txt;

  if (customerData.cash_payments === 1) {
    cash.textContent = "💷";
  }

  if (customerData.card_payments === 1) {
    card.textContent = "💳";
  }
  // console.log("Rendered successfully")
}

renderProfile();
