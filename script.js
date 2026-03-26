// --- Travel Places Data (Includes Wikipedia Links) ---
const travelPlaces = [
    { id: 1, name: "Eiffel Tower", image: "https://media.architecturaldigest.com/photos/66a951edce728792a48166e6/16:9/w_1920,c_limit/GettyImages-955441104.jpg", description: "The iconic wrought-iron lattice tower on the Champ de Mars in Paris, France.", wikipediaLink: "https://en.wikipedia.org/wiki/Eiffel_Tower" },
    { id: 2, name: "Great Wall of China", image: "https://whc.unesco.org/uploads/thumbs/site_0438_0035-400-400-20251104110355.webp", description: "A series of fortifications built across the historical northern borders of China, spanning thousands of miles.", wikipediaLink: "https://en.wikipedia.org/wiki/Great_Wall_of_China" },
    { id: 3, name: "Machu Picchu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQzJqLAn29h0J7IacWzqV-bXGEpU-jIu4kQ&s", description: "An ancient 15th-century Incan citadel set high in the Andes Mountains in Peru, famous for its dry-stone walls.", wikipediaLink: "https://en.wikipedia.org/wiki/Machu_Picchu" },
    { id: 4, name: "Taj Mahal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6RtkJt6Cd3FjTw6pBisKbNvbarIH43Vw2w&s", description: "An ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra, commissioned in 1632.", wikipediaLink: "https://en.wikipedia.org/wiki/Taj_Mahal" },
    { id: 5, name: "The Colosseum", image: "https://cdn-imgix.headout.com/microbrands-content-image/image/005b35a598b659882b439205d16f90d3-Colosseum%20in%20Use.jpg?auto=format&w=1069.6000000000001&h=687.6&q=90&ar=14%3A9&crop=faces&fit=crop", description: "The largest ancient amphitheatre ever built, located in the centre of the city of Rome, Italy.", wikipediaLink: "https://en.wikipedia.org/wiki/Colosseum" },
    { id: 6, name: "Pyramids of Giza", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFWQJGfWF7NV_pJgljlIzx54ktQOf0QDMTA&s", description: "The complex includes the Great Pyramid of Giza, the Pyramid of Khafre, and the Pyramid of Menkaure, bordering Giza in Greater Cairo.", wikipediaLink: "https://en.wikipedia.org/wiki/Giza_pyramid_complex" },
    { id: 7, name: "Statue of Liberty", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_viCV6mHdA0LT9_npUCsg5S42uUdSUHklnQ&s", description: "A colossal neoclassical sculpture on Liberty Island in New York Harbor, USA, a symbol of freedom and democracy.", wikipediaLink: "https://en.wikipedia.org/wiki/Statue_of_Liberty" },
    { id: 8, name: "Bora Bora", image: "https://images.trvl-media.com/lodging/1000000/560000/558800/558749/37620ff7.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill", description: "A small South Pacific island northwest of Tahiti, known for its stunning turquoise lagoons and overwater bungalows.", wikipediaLink: "https://en.wikipedia.org/wiki/Bora_Bora" },
    { id: 9, name: "Petra", image: "https://i.natgeofe.com/n/5ba0cd81-b859-40a0-93f1-2d26ff6d5ef9/DHHXC2.jpg", description: "A famous archaeological site in Jordan, known for its rock-cut architecture, particularly The Treasury (Al-Khazneh).", wikipediaLink: "https://en.wikipedia.org/wiki/Petra" },
    { id: 10, name: "Acropolis of Athens", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzWWZchvZKC1vIG1AJNBE5emM79Zs5xDDLA&s", description: "An ancient citadel located on a rocky outcrop above Athens, home to the Parthenon, dedicated to the goddess Athena.", wikipediaLink: "https://en.wikipedia.org/wiki/Acropolis_of_Athens" },
    { id: 11, name: "Angkor Wat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ei1b1PC0KxdBKQ3ILFspUtizCQVc9NvWZw&s", description: "A temple complex in Cambodia and the largest religious monument in the world, originally Hindu, then Buddhist.", wikipediaLink: "https://en.wikipedia.org/wiki/Angkor_Wat" },
    { id: 12, name: "Rio de Janeiro (Christ the Redeemer)", image: "https://study.com/cimages/multimages/16/christ-the-redeemer-1-cristo-redentor-corcovado-mountain-rio-de-janeiro-20073481671552423387843.jpg", description: "A 30-meter Art Deco statue of Jesus Christ on top of Corcovado mountain, overlooking Rio de Janeiro.", wikipediaLink: "https://en.wikipedia.org/wiki/Christ_the_Redeemer" },
    { id: 13, name: "Sydney Opera House", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsT8nI1D-kwg9szg31Ge6HHn5uGbNjzyWb0Q&s", description: "A multi-venue performing arts centre in Sydney, Australia, defined by its iconic 'sail' structures.", wikipediaLink: "https://en.wikipedia.org/wiki/Sydney_Opera_House" },
    { id: 14, name: "The Alps", image: "https://www.wildernesstravel.com/wp-content/uploads/2024/12/alps-grou-hiking-trip-reflection-lake-france-1680x826.jpg", description: "The highest and most extensive mountain range system in Europe, famous for mountaineering and picturesque valleys.", wikipediaLink: "https://en.wikipedia.org/wiki/Alps" },
    { id: 15, name: "Kyoto (Fushimi Inari-taisha)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6JDtZh3TILxcrLjJQ7juAC_ygiVo46rvXw&s", description: "Known for the thousands of vibrant red torii gates that wind through the forest up the mountain, dedicated to the Shinto rice god Inari.", wikipediaLink: "https://en.wikipedia.org/wiki/Fushimi_Inari-taisha" },
    { id: 16, name: "Victoria Falls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUEdDNgBPi4-hYVRyaqd3-KHaOJVsW_Asyg&s", description: "Locally known as Mosi-oa-Tunya ('The Smoke that Thunders'), it's a massive waterfall on the Zambezi River.", wikipediaLink: "https://en.wikipedia.org/wiki/Victoria_Falls" },
    { id: 17, name: "Rajgir", image: "https://www.trvme.com/img/destinations/5772922-Rajgir-destination3.jpg", description: "Rajgir is an ancient city in the northeast Indian state of Bihar. Surrounded by hills, it was the first capital of the Magadha kingdom.", wikipediaLink: "https://en.wikipedia.org/wiki/Rajgir" },
    { id: 18, name: "Patratu Valley", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kgsPuxaQIiEH5CNO1vytV8b5Qh0ef0_vSg&s", description: "A stunning valley and dam area in Jharkhand, India, popular for its winding ghat road with panoramic views.", wikipediaLink: "https://en.wikipedia.org/wiki/Patratu_Valley" },
    { id: 19, name: "Santorini", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqGg5kO0p4HjE7vJ5V1_s1B0q4F_g9W9K2YQ&s", description: "A volcanic Greek island famous for its white-washed villages, blue-domed churches, and spectacular sunsets over the Aegean Sea.", wikipediaLink: "https://en.wikipedia.org/wiki/Santorini" },
    { id: 20, name: "Halong Bay", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhX5RjX1P8g-J7L4dF8t9Uq2I4l0v4G5m8yA&s", description: "A UNESCO World Heritage Site in Vietnam, known for its thousands of towering limestone islands and calm waters.", wikipediaLink: "https://en.wikipedia.org/wiki/Ha_Long_Bay" },
];

// --- DOM Elements ---
const placesGallery = document.getElementById('places-section');
const detailView = document.getElementById('detail-view');
const selectedPlaceDetail = document.getElementById('selected-place-detail');
const relatedPlacesList = document.getElementById('related-places-list');

const wishlistModal = document.getElementById('wishlistModal');
const wishlistContainer = document.getElementById('wishlist-container');
const emptyWishlistMessage = document.getElementById('empty-wishlist-message'); 
const wishlistCountSpan = document.getElementById('wishlist-count');

const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

// --- Wishlist Management in LocalStorage ---
const WISHLIST_KEY = 'travelWishlist';

function getWishlist() {
    const wishlistJson = localStorage.getItem(WISHLIST_KEY);
    return wishlistJson ? JSON.parse(wishlistJson) : [];
}

function saveWishlist(wishlist) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    updateWishlistCount();
}

function updateWishlistCount() {
    wishlistCountSpan.textContent = getWishlist().length;
}


// --- Dynamic Rendering & Interactive Detail View ---

function createPlaceCard(place, isWishlisted = false) {
    return `
        <div class="place-card" data-id="${place.id}" onclick="showDetailView(${place.id})">
            <img src="${place.image}" alt="${place.name}">
            <div class="card-content">
                <h3>${place.name}</h3>
                <p>${place.description.substring(0, 80)}...</p>
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                        onclick="event.stopPropagation(); toggleWishlistStatus(${place.id}, this)">
                    <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>
        </div>
    `;
}

function renderPlaces(places, container) {
    const wishlist = getWishlist();
    container.innerHTML = places.map(place => 
        createPlaceCard(place, wishlist.includes(place.id))
    ).join('');

    if (places.length === 0 && container.id === 'places-section') {
        container.innerHTML = `<p style="text-align:center; width:100%;">No places found matching your search.</p>`;
    }
}

function showGallery() {
    placesGallery.classList.remove('hidden');
    detailView.classList.add('hidden');
    // Ensure the main gallery is not filtered by a stale search when returning
    filterPlaces();
}


// --- Detail View Functions ---

function showDetailView(placeId) {
    const place = travelPlaces.find(p => p.id === placeId);
    if (!place) return;

    placesGallery.classList.add('hidden');
    detailView.classList.remove('hidden');

    const isWishlisted = getWishlist().includes(place.id);
    const wikipediaLink = place.wikipediaLink || '#';

    // 1. Render the Main Detail Content (70% side - Left)
    selectedPlaceDetail.innerHTML = `
        <button class="back-btn" onclick="showGallery()">
            <i class="fa-solid fa-arrow-left"></i> Back to Places
        </button>
        
        <div class="detail-header">
            <h2>${place.name}</h2>
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                    onclick="toggleWishlistStatus(${place.id}, this)">
                <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
                ${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
        </div>
        
        <a href="${wikipediaLink}" target="_blank" class="detail-image-link" onclick="openWikipedia(event, '${wikipediaLink}')">
             <img src="${place.image}" alt="${place.name}" class="detail-image">
        </a>
       
        <div class="detail-description">
            <p><strong>Location Details:</strong></p>
            <p>${place.description}</p>
            <p>Click the image above to visit the Wikipedia page for more historical and travel information!</p>
        </div>
    `;

    renderRelatedPlaces(placeId);
    
    // Scroll to the top of the container when opening the detail view
    document.querySelector('.container').scrollTop = 0; 
}

/**
 * Handles the single click on the main image to open Wikipedia.
 */
function openWikipedia(event, url) {
    // This function is simply a safety wrapper to ensure the link opens correctly.
    event.stopPropagation(); 
    // The link is already on the <a> tag, but calling window.open here ensures it.
    window.open(url, '_blank'); 
}


function renderRelatedPlaces(currentPlaceId) {
    const relatedPlaces = travelPlaces
        .filter(place => place.id !== currentPlaceId)
        .slice(0, 5); 

    if (relatedPlaces.length === 0) {
        relatedPlacesList.innerHTML = `<p style="padding: 10px;">No other places available.</p>`;
        return;
    }

    relatedPlacesList.innerHTML = relatedPlaces.map(place => `
        <div class="related-place-card" onclick="showDetailView(${place.id})">
            <img src="${place.image}" alt="${place.name}">
            <h4>${place.name}</h4>
        </div>
    `).join('');
    
    relatedPlacesList.scrollTop = 0;
}


// --- Wishlist Actions ---

function toggleWishlistStatus(placeId, btnElement) {
    const placeIdNumber = Number(placeId);
    let wishlist = getWishlist();
    const isWishlisted = wishlist.includes(placeIdNumber);
    const heartIcon = btnElement.querySelector('i');
    const isDetailView = detailView.classList.contains('hidden') === false;

    if (isWishlisted) {
        wishlist = wishlist.filter(id => id !== placeIdNumber);
        if (heartIcon) {
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
        }
        btnElement.classList.remove('active');
    } else {
        wishlist.push(placeIdNumber);
        if (heartIcon) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
        }
        btnElement.classList.add('active');
    }

    saveWishlist(wishlist);
    
    if (isDetailView) {
        btnElement.innerHTML = `<i class="fa-${!isWishlisted ? 'solid' : 'regular'} fa-heart"></i> ${!isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}`;
    }

    if (wishlistModal.style.display === 'block') {
        renderWishlist();
    } else {
        filterPlaces(); 
    }
}

function renderWishlist() {
    const wishlistIds = getWishlist();
    const wishlistedPlaces = travelPlaces.filter(place => wishlistIds.includes(place.id));

    if (wishlistedPlaces.length > 0) {
        emptyWishlistMessage.style.display = 'none';
        
        wishlistContainer.innerHTML = wishlistedPlaces.map(place => {
            return `
                <div class="place-card" data-id="${place.id}" onclick="showDetailView(${place.id}); toggleWishlist()">
                    <img src="${place.image}" alt="${place.name}">
                    <div class="card-content">
                        <h3>${place.name}</h3>
                        <p>${place.description.substring(0, 80)}...</p>
                        <button class="wishlist-btn active" 
                                onclick="event.stopPropagation(); toggleWishlistStatus(${place.id}, this)">
                            <i class="fa-solid fa-heart"></i> Remove
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        wishlistContainer.innerHTML = '';
        emptyWishlistMessage.style.display = 'block';
    }
}

function toggleWishlist() {
    if (wishlistModal.style.display === 'block') {
        wishlistModal.style.display = 'none';
    } else {
        renderWishlist();
        wishlistModal.style.display = 'block';
    }
}

function clearWishlist() {
    if (confirm("Are you sure you want to clear your entire wishlist?")) {
        saveWishlist([]);
        renderWishlist();
        filterPlaces();
        alert("Wishlist cleared!");
    }
}

// --- Search Functionality ---

function filterPlaces() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Search only applies to the main gallery view
    if (detailView.classList.contains('hidden') === false) return;

    const filteredPlaces = travelPlaces.filter(place => 
        place.name.toLowerCase().includes(searchTerm) || 
        place.description.toLowerCase().includes(searchTerm)
    );

    renderPlaces(filteredPlaces, placesGallery);
}


// --- Initialization ---

function init() {
    renderPlaces(travelPlaces, placesGallery);
    updateWishlistCount();

    // Close modals when clicking outside of them
    window.onclick = function(event) {
        if (event.target == wishlistModal) {
            wishlistModal.style.display = "none";
        }
        // Image modal closing kept
        if (event.target == imageModal) {
            imageModal.style.display = "none";
        }
    }
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && wishlistModal.style.display === 'block') {
            wishlistModal.style.display = 'none';
        }
        if (event.key === 'Escape' && imageModal.style.display === 'flex') {
            imageModal.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
