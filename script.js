const houses = [
  {
    name: "Studio Apartment",
    location: "Nairobi",
    price: 20000,
    type: "Studio",
    image: "pictures/studio.jpeg"
  },
  {
    name: "One Bedroom House",
    location: "Westlands",
    price: 50000,
    type: "One Bedroom",
    image: "pictures/onebedroom.jpeg"
  },
  {
    name: "Two Bedroom House",
    location: "Kilimani",
    price: 100000,
    type: "Two Bedroom",
    image: "pictures/twobedroom.jpeg"
  },
  {
    name: "Studio Apartment",
    location: "Kasarani",
    price: 18000,
    type: "Studio",
    image: "pictures/studio.jpeg"
  }
];

function displayHouses(data) {
  const container = document.getElementById("house-list");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No houses found 😢</p>";
    return;
  }

  data.forEach(house => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${house.image}">
      <div class="card-content">
        <h3>${house.name}</h3>
        <p>${house.location}</p>
        <p>Ksh ${house.price}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

function searchHouses() {
  const location = document.getElementById("search-location").value.toLowerCase();
  const type = document.getElementById("search-type").value;
  const price = document.getElementById("search-price").value;

  const filtered = houses.filter(house => {
    return (
      (location === "" || house.location.toLowerCase().includes(location)) &&
      (type === "" || house.type === type) &&
      (price === "" || house.price <= price)
    );
  });

  displayHouses(filtered);
}

// Load all houses initially
window.onload = () => {
  displayHouses(houses);
};

//Sponsored Listings 
async function loadSponsored() {
  const API_KEY = "YOUR_API_KEY_HERE";

  const url = `https://api.bestbuy.com/v1/products((search=laptop))?apiKey=${API_KEY}&format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    displaySponsored(data.products);
  } catch (error) {
    console.log("Error loading sponsored items:", error);
  }
}

function displaySponsored(products) {
  const container = document.getElementById("sponsored-list");
  container.innerHTML = "";

  products.slice(0, 4).forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}">
      <div class="card-content">
        <h3>${product.name}</h3>
        <p>Ksh ${product.salePrice}</p>
        <span class="sponsored-tag">Sponsored</span>
      </div>
    `;

    container.appendChild(card);
  });
}


window.onload = () => {
  displayHouses(houses); // your houses
  loadSponsored();       // API products
};