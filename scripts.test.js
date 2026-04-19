const { filterHouses } = require('./script');

describe("House Filtering", () => {

  const houses = [
    { name: "Studio", location: "Nairobi", type: "Studio", price: 20000 },
    { name: "One Bedroom", location: "Westlands", type: "One Bedroom", price: 50000 },
    { name: "Two Bedroom", location: "Kilimani", type: "Two Bedroom", price: 100000 },
    { name: "Studio", location: "Kasarani", type: "Studio", price: 18000 }
  ];

  test("filters by location", () => {
    const result = filterHouses(houses, "nairobi", "", "");
    expect(result.length).toBe(1);
  });

  test("filters by type", () => {
    const result = filterHouses(houses, "", "Studio", "");
    expect(result.length).toBe(2);
  });

  test("filters by price", () => {
    const result = filterHouses(houses, "", "", 50000);
    expect(result.length).toBe(3);
  });

  test("filters by location and type", () => {
    const result = filterHouses(houses, "kasarani", "Studio", "");
    expect(result.length).toBe(1);
  });

  test("returns empty if no match", () => {
    const result = filterHouses(houses, "mombasa", "", "");
    expect(result.length).toBe(0);
  });

});