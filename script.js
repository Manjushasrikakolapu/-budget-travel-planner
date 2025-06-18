const destinations = [
  {
    name: "Goa",
    type: "Beach",
    from: {
      Hyderabad: 15000,
      Bangalore: 12000,
      Chennai: 14000,
      Delhi: 17000,
      Mumbai: 11000,
      Pune: 9000
    },
    image: "images/goa.jpg",
    hotel: "Sea View Resort",
    restaurant: "Fisherman's Wharf",
    hotelCost: 4000,
    travelCost: 7000,
    foodCost: 3000,
    itinerary: ["Day 1: Beach visit", "Day 2: Fort Aguada", "Day 3: Cruise ride"]
  },
  {
    name: "Manali",
    type: "Hill",
    from: {
      Hyderabad: 18000,
      Delhi: 9000,
      Mumbai: 15000,
      Jaipur: 10000,
      Chandigarh: 7000
    },
    image: "images/manali.jpg",
    hotel: "Snow Valley Resort",
    restaurant: "Johnson's Cafe",
    hotelCost: 4500,
    travelCost: 6000,
    foodCost: 2500,
    itinerary: ["Day 1: Mall Road", "Day 2: Solang Valley", "Day 3: Hidimba Temple"]
  },
  {
    name: "Ooty",
    type: "Hill",
    from: {
      Hyderabad: 12000,
      Bangalore: 9000,
      Kochi: 10000,
      Chennai: 8000,
      Pune: 11000
    },
    image: "images/ooty.jpg",
    hotel: "Berry Hills Resort",
    restaurant: "Earl's Secret",
    hotelCost: 3000,
    travelCost: 5000,
    foodCost: 2000,
    itinerary: ["Day 1: Botanical Garden", "Day 2: Ooty Lake", "Day 3: Doddabetta Peak"]
  },
  {
    name: "Rishikesh",
    type: "Adventure",
    from: {
      Delhi: 7000,
      Mumbai: 12000,
      Hyderabad: 16000,
      Jaipur: 9500
    },
    image: "images/rishikesh.jpg",
    hotel: "Divine Resort",
    restaurant: "Chotiwala",
    hotelCost: 3500,
    travelCost: 6000,
    foodCost: 2500,
    itinerary: ["Day 1: Ganga Aarti", "Day 2: Rafting", "Day 3: Lakshman Jhula"]
  },
  {
    name: "Kashmir",
    type: "Hill",
    from: {
      Delhi: 11000,
      Mumbai: 16000,
      Hyderabad: 17000,
      Bangalore: 15500
    },
    image: "images/kashmir.jpg",
    hotel: "Kashmir Heritage Inn",
    restaurant: "Mughal Darbar",
    hotelCost: 5000,
    travelCost: 8000,
    foodCost: 3000,
    itinerary: [
      "Day 1: Dal Lake Shikara Ride",
      "Day 2: Gulmarg snow activities",
      "Day 3: Local shopping and gardens",
      "Day 4: Visit Sonamarg temples",
      "Day 5: Explore local cuisine & museums"
    ]
  },
  {
    name: "Kerala",
    type: "Relaxing",
    from: {
      Hyderabad: 14000,
      Chennai: 9000,
      Bangalore: 8500,
      Mumbai: 13000
    },
    image: "images/kerala.jpg",
    hotel: "Backwater Resort",
    restaurant: "Grandmas Kitchen",
    hotelCost: 4200,
    travelCost: 6200,
    foodCost: 3000,
    itinerary: [
      "Day 1: Houseboat in Alleppey",
      "Day 2: Fort Kochi exploration",
      "Day 3: Ayurvedic massage",
      "Day 4: Visit to Munnar tea estates",
      "Day 5: Sunset beach walk & local food"
    ]
  },
  {
    name: "Gokarna",
    type: "Beach",
    from: {
      Hyderabad: 9500,
      Bangalore: 7500,
      Pune: 8000,
      Mumbai: 8800
    },
    image: "images/gokarna.jpg",
    hotel: "Om Beach Resort",
    restaurant: "Prema Restaurant",
    hotelCost: 3200,
    travelCost: 5000,
    foodCost: 2500,
    itinerary: [
      "Day 1: Om Beach hike",
      "Day 2: Temple & Paradise beach",
      "Day 3: Water sports",
      "Day 4: Beachside café experience",
      "Day 5: Explore Kudle beach"
    ]
  },
  {
    name: "Chikmagalur",
    type: "Hill",
    from: {
      Bangalore: 5000,
      Hyderabad: 9500,
      Chennai: 10000,
      Pune: 12000
    },
    image: "images/chikmagalur.jpg",
    hotel: "Coffee Estate Stay",
    restaurant: "Town Canteen",
    hotelCost: 3000,
    travelCost: 4800,
    foodCost: 2200,
    itinerary: [
      "Day 1: Coffee plantation walk",
      "Day 2: Mullayanagiri Trek",
      "Day 3: Baba Budangiri hills",
      "Day 4: Lakeside picnic",
      "Day 5: Waterfalls & caves"
    ]
  },
  {
    name: "Araku Valley",
    type: "Hill",
    from: {
      Visakhapatnam: 3000,
      Hyderabad: 8000,
      Vijayawada: 6000,
      Bangalore: 9500
    },
    image: "images/araku.jpg",
    hotel: "Valley View Resort",
    restaurant: "Dhaba Delight",
    hotelCost: 2800,
    travelCost: 4500,
    foodCost: 1700,
    itinerary: [
      "Day 1: Tribal Museum visit",
      "Day 2: Borra Caves",
      "Day 3: Coffee Museum",
      "Day 4: Katiki Waterfalls",
      "Day 5: Scenic train ride"
    ]
  }
];

function createCard(dest, city = null, cost = null, days = 3) {
  const card = document.createElement('div');
  card.className = 'card';

  const finalCost = cost || (city && dest.from[city]) || "N/A";
  const cityName = city || "Your City";

  let itineraryItems = dest.itinerary.slice(0, days);
  if (days > dest.itinerary.length) {
    itineraryItems = dest.itinerary.concat(
      Array.from({ length: days - dest.itinerary.length }, (_, i) => `Extra Activity: Explore nearby spot ${i + 1}`)
    );
  }

  const totalCost = (dest.hotelCost || 0) + (dest.travelCost || 0) + (dest.foodCost || 0);

  card.innerHTML = `
    <img src="${dest.image}" alt="${dest.name}" onclick="toggleCard(this)">
    <div class="card-content">
      <h3>${dest.name}</h3>
      <p><strong>Trip Type:</strong> ${dest.type}</p>
      <p><strong>From:</strong> ${cityName}</p>
      <p><strong>Total Estimated Cost:</strong> ₹${totalCost}</p>
      <p><strong>Hotel:</strong> ${dest.hotel} (₹${dest.hotelCost})</p>
      <p><strong>Travel Cost:</strong> ₹${dest.travelCost}</p>
      <p><strong>Food Cost:</strong> ₹${dest.foodCost}</p>
      <p><strong>Restaurant:</strong> ${dest.restaurant}</p>
      <p><strong>Map:</strong> <a href="https://www.google.com/maps/search/${encodeURIComponent(dest.name)}" target="_blank">View on Google Maps</a></p>
      <p><strong>Itinerary:</strong></p>
      <ul>${itineraryItems.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>
  `;
  return card;
}

function findPlaces() {
  const city = document.getElementById('cityInput').value.trim();
  const budget = parseInt(document.getElementById('budgetInput').value);
  const days = parseInt(document.getElementById('daysInput').value);
  const type = document.getElementById('typeInput').value;
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (!city || isNaN(budget) || !type || isNaN(days)) {
    alert("Please enter city, budget, trip type, and number of days.");
    return;
  }

  const matches = destinations.filter(dest => {
    const totalCost = (dest.hotelCost || 0) + (dest.travelCost || 0) + (dest.foodCost || 0);
    return dest.type === type && dest.from[city] && totalCost <= budget;
  });

  if (matches.length === 0) {
    resultsDiv.innerHTML = `<p>No destinations found from <strong>${city}</strong> under ₹${budget} for <strong>${type}</strong> trips.</p>`;
    return;
  }

  matches.forEach(dest => {
    const card = createCard(dest, city, dest.from[city], days);
    resultsDiv.appendChild(card);
  });
}

function showAllTrips() {
  const days = parseInt(document.getElementById('daysInput').value) || 3;
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  destinations.forEach(dest => {
    const card = createCard(dest, null, null, days);
    resultsDiv.appendChild(card);
  });
}

function toggleCard(imgElement) {
  const card = imgElement.parentElement;
  card.classList.toggle('active');
}
