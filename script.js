// script.js

function renderLayout() {
  const container = document.getElementById('hero-section');
  const isMobile = window.innerWidth <= 640;

  // HTML para Desktop
  let html = `
    <div class="flex flex-row justify-center items-center gap-4">
      <!-- Coluna 1: Vídeo 1 -->
      <div class="w-1/4 flex justify-center">
        <video autoplay muted loop class="w-full max-w-sm rounded-lg shadow-lg">
          <source src="videos/1.mp4" type="video/mp4">
        </video>
      </div>

      <!-- Coluna 2: Texto e botão -->
      <div class="w-1/3 text-center flex flex-col justify-center items-center">
        <h1 class="text-2xl font-bold font-serif mb-4">RM Sweet House</h1>
        <h2 class="text-2xl font-bold font-serif mb-4">Consolação / Peniche</h2>
        <button onclick="scrollToAbout()" class="bg-[#ff5a60] hover:bg-[#ef4a50] text-white font-semibold py-3 px-8 rounded-lg mt-4">
          Saiba mais!
        </button>
      </div>

      <!-- Coluna 3: Vídeo 2 -->
      <div class="w-1/4 flex justify-center">
        <video autoplay muted loop class="w-full max-w-sm rounded-lg shadow-lg">
          <source src="videos/2.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  `;

  // HTML para Mobile
  if (isMobile) {
    html = `
      <div class="flex flex-col items-center gap-4">
        <!-- Linha com os dois vídeos em colunas -->
        <div class="flex w-full gap-4">
          <div class="w-1/2 flex justify-center">
            <video autoplay muted loop class="w-full max-w-xs rounded-lg shadow-lg">
              <source src="videos/1.mp4" type="video/mp4">
            </video>
          </div>
          <div class="w-1/2 flex justify-center">
            <video autoplay muted loop class="w-full max-w-xs rounded-lg shadow-lg">
              <source src="videos/2.mp4" type="video/mp4">
            </video>
          </div>
        </div>

        <!-- Linha com texto e botão -->
        <div class="w-full text-center flex flex-col items-center">
          <h1 class="text-2xl font-bold font-serif mb-4">RM Sweet House</h1>
          <h2 class="text-2xl font-bold font-serif mb-4">Consolação / Peniche</h2>
          <button onclick="scrollToAbout()" class="bg-[#ff5a60] hover:bg-[#ef4a50] text-white font-semibold py-3 px-8 rounded-lg mt-4">
            Saiba mais!
          </button>
        </div>
      </div>
    `;
  }

  // Atualiza o HTML da seção
  container.innerHTML = html;
}

function toggleExpand() {
  const content = document.getElementById('expandable-content');
  const toggleText = document.getElementById('expand-toggle');
  
  content.classList.toggle('expanded');
  
  if (content.classList.contains('expanded')) {
    toggleText.innerHTML = '••• ↑↑↑ •••';
  } else {
    toggleText.innerHTML = '••• ↓↓↓ •••';
  }
}

// Função para verificar o tamanho da tela
function checkScreenSize() {
  const toggleText = document.getElementById('expand-toggle');
  const content = document.getElementById('expandable-content');
  
  if (window.innerWidth >= 768) { // Breakpoint do Tailwind md:
    content.classList.add('expanded'); // Expande o conteúdo
    toggleText.classList.add('hidden'); // Oculta o texto interativo
  } else {
    toggleText.classList.remove('hidden');
    if (!content.classList.contains('expanded')) {
      content.classList.remove('expanded'); // Recolhe o conteúdo
    }
  }
}

// Executar ao carregar a página
document.addEventListener('DOMContentLoaded', checkScreenSize);

// Executar ao redimensionar a janela
window.addEventListener('resize', checkScreenSize);

// Executa a função ao carregar a página e quando a tela for redimensionada
window.addEventListener('load', renderLayout);
window.addEventListener('resize', renderLayout);



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

// Airbnb link
const airbnbHost = "https://www.airbnb.pt/users/show/194275208";

// Function to redirect to Airbnb
function redirectToAirbnbHost() {
  window.open(airbnbHost, "_blank");
}

// Função para rolar até a seção Sobre
function scrollToAbout() {
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
}

// Função para rolar suavemente até o topo da página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Mostrar o botão quando o usuário descer na página
window.onscroll = function () {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.classList.remove('opacity-0');
    scrollBtn.classList.add('opacity-100');
  } else {
    scrollBtn.classList.remove('opacity-100');
    scrollBtn.classList.add('opacity-0');
  }
};

// Função para carregar as reviews a partir do arquivo reviews.json
function loadReviews() {
  fetch('data/reviews.json')  // Caminho para o arquivo JSON
    .then(response => response.json())
    .then(reviews => {
      const reviewsContainer = document.getElementById('reviews-container');
      reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-lg');
        
        reviewElement.innerHTML = `
          <div class="flex items-center mb-4">
            <img src="${review.image}" alt="${review.name}" class="w-12 h-12 rounded-full mr-4">
            <div>
              <p class="font-semibold">${review.name}</p>
              <p class="text-gray-500 text-sm">${review.date}</p>
            </div>
          </div>
          <div class="flex mb-4">
            ${renderStars(review.rating)}
          </div>
          <p class="text-gray-600">${review.comment}</p>
        `;
        
        reviewsContainer.appendChild(reviewElement);
      });
    })
    .catch(error => console.error('Erro ao carregar as avaliações:', error));
}

// Função para renderizar as estrelas baseadas na classificação
function renderStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27l5.18 3.09-1.64-6.91L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.21-1.64 6.91L12 17.27z"></path></svg>';
    } else {
      stars += '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27l5.18 3.09-1.64-6.91L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.21-1.64 6.91L12 17.27z"></path></svg>';
    }
  }
  return stars;
}

// Carregar as reviews assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadReviews);

//MAPA
document.addEventListener("DOMContentLoaded", function () {
  // Criação do mapa
  const map = L.map('map', {
        center: [39.32428692541661, -9.357702185361886],
        zoom: 15,
        scrollWheelZoom: false, // Desabilita o zoom com o mouse
        zoomControl: false // Remove os controles de zoom
      });

  // Adiciona a camada de tile do OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Definir o marcador personalizado
  const customIcon = L.icon({
    iconUrl: 'images/custom-marker.png', // Caminho para a sua imagem personalizada
    iconSize: [48, 48],  // Tamanho do ícone
    iconAnchor: [24, 48], // Onde o ícone está ancorado no marcador
    popupAnchor: [0, -48] // Onde o popup aparecerá em relação ao marcador
  });

  // Adiciona um marcador personalizado no mapa
  L.marker([39.32446999488789, -9.35769780287039], { icon: customIcon }).addTo(map)
    .bindPopup('RM Sweet House')
    .openPopup();
});
