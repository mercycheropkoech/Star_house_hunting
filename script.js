const houses = [
  {
    name: "Ocean Breeze Villa",
    location: "Mombasa",
    price: 900000,
    type: "Villa",
    image: "house1.jpg"
  },
  {
    name: "City Apartment",
    location: "Nairobi",
    price: 500000,
    type: "Apartment",
    image: "house2.jpg"
  },
  {
    name: "Lakeside Cottage",
    location: "Naivasha",
    price: 650000,
    type: "Cottage",
    image: "house3.jpg"
  }
];

function displayHouses(data) {
  const container = document.getElementById("house-list");
  container.innerHTML = "";

  data.forEach(house => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${house.image}">
      <h3>${house.name}</h3>
      <p>${house.location}</p>
      <p>$${house.price}</p>
    `;

    container.appendChild(card);
  });
}

// Load all houses when page opens
displayHouses(houses);