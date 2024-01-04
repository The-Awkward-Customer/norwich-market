console.log("hello world");

var currentUrl = window.location.href;
console.log(currentUrl);

var parts = currentUrl.split("/");
console.log(parts);

var lastPart = parts.pop(); // This is the part after the last '/'
console.log(lastPart);

async function getCustomerUid() {
  const response = await fetch(`http://localhost:8080/profile/${lastPart}`);
  const customerData = await response.json();

  console.log(customerData);
}

getCustomerUid();
