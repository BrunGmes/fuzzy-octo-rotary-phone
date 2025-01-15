// script.js

// Array com todas as URLs das imagens
const images = [
  "images/1.jpg", "images/2.jpg", "images/3.jpg",
  "images/4.jpg", "images/5.jpg", "images/6.jpg",
  "images/7.jpg", "images/8.jpg", "images/9.jpg",
  "images/10.jpg", "images/11.jpg", "images/12.jpg",
  "images/13.jpg", "images/14.jpg", "images/15.jpg",
  "images/16.jpg", "images/17.jpg", "images/18.jpg",
  "images/19.jpg", "images/20.jpg", "images/21.jpg",
  "images/22.jpg", "images/23.jpg", "images/24.jpg",
  "images/25.jpg", "images/26.jpg", "images/27.jpg",
  "images/28.jpg", "images/29.jpg", "images/30.jpg",
  "images/31.jpg", "images/32.jpg", "images/33.jpg",
  "images/34.jpg", "images/35.jpg", "images/36.jpg",
  "images/37.jpg", "images/38.jpg", "images/39.jpg",
  "images/40.jpg", "images/41.jpg", "images/42.jpg",
  "images/43.jpg", "images/44.jpg", "images/45.jpg",
  "images/46.jpg",
];

// Variáveis de controle
const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("load-more-btn");
let imagesLoaded = 0; // Quantas imagens já foram carregadas
const imagesPerLoad = 4; // Quantas imagens carregar por clique

// Função para renderizar imagens
function renderImages() {
  const nextBatch = images.slice(imagesLoaded, imagesLoaded + imagesPerLoad);
  nextBatch.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = `Airbnb Photo ${imagesLoaded + 1}`;
    imgElement.className = "rounded-lg shadow-lg w-full transform hover:scale-110 transition-transform duration-300";
    gallery.appendChild(imgElement);
    imagesLoaded++;
  });

  // Esconde o botão se todas as imagens forem carregadas
  if (imagesLoaded >= images.length) {
    loadMoreBtn.style.display = "none";
  }
}

// Adiciona o evento ao botão
loadMoreBtn.addEventListener("click", renderImages);

// Carrega o primeiro lote de imagens ao carregar a página
document.addEventListener("DOMContentLoaded", renderImages);

// Airbnb link
const airbnbLink = "https://www.airbnb.com/rooms/25861024";

// Function to redirect to Airbnb
function redirectToAirbnb() {
  window.open(airbnbLink, "_blank");
}

// Simulated reviews data (você pode alterar para adicionar mais)
const reviews = [
  {
    name: "Alice",
    text: "Amazing stay! Beautiful place and great host.",
    stars: 5,
    photo: "https://via.placeholder.com/100",
  },
  {
    name: "Bob",
    text: "Loved the view and the cozy atmosphere.",
    stars: 4,
    photo: "https://via.placeholder.com/100",
  },
  {
    name: "Charlie",
    text: "Perfect location, close to everything!",
    stars: 5,
    photo: "https://via.placeholder.com/100",
  },
];

// Função para criar as estrelas
function renderStars(count) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      stars += `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5 text-yellow-500 inline" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.455L24 9.051l-6 5.849 1.416 8.252L12 18.896l-7.416 3.89L6 14.9 0 9.051l8.332-1.009z"/></svg>`;
    } else {
      stars += `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5 text-gray-300 inline" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.455L24 9.051l-6 5.849 1.416 8.252L12 18.896l-7.416 3.89L6 14.9 0 9.051l8.332-1.009z"/></svg>`;
    }
  }
  return stars;
}

// Função para carregar reviews
function loadReviews() {
  const reviewsContainer = document.getElementById("reviews-container");
  reviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.className = "bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center";
    reviewElement.innerHTML = `
      <img src="${review.photo}" alt="${review.name}'s photo" class="w-24 h-24 rounded-full mb-4">
      <h3 class="text-xl font-bold mb-2">${review.name}</h3>
      <div class="flex justify-center mb-4">${renderStars(review.stars)}</div>
      <p class="text-gray-600">${review.text}</p>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
}

// Inicializar reviews ao carregar a página
document.addEventListener("DOMContentLoaded", loadReviews);