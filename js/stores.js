document.addEventListener('DOMContentLoaded', function() {
  // Store Search Functionality
  const citySelect = document.getElementById('city-select');
  const storeSearch = document.getElementById('store-search');
  const searchBtn = document.querySelector('.search-btn');
  const storeCards = document.querySelectorAll('.store-card');
  
  function filterStores() {
    const selectedCity = citySelect.value.toLowerCase();
    const searchTerm = storeSearch.value.toLowerCase();
    
    storeCards.forEach(card => {
      const storeCity = card.getAttribute('data-city').toLowerCase();
      const storeText = card.textContent.toLowerCase();
      
      // Check if store matches both city and search term filters
      const matchesCity = selectedCity === '' || storeCity === selectedCity;
      const matchesSearch = searchTerm === '' || storeText.includes(searchTerm);
      
      if (matchesCity && matchesSearch) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  }
  
  // Event listeners
  if (searchBtn) {
    searchBtn.addEventListener('click', filterStores);
  }
  
  if (citySelect) {
    citySelect.addEventListener('change', filterStores);
  }
  
  if (storeSearch) {
    storeSearch.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        filterStores();
      }
    });
  }
  
  // Simulate interactive map (placeholder for actual map implementation)
  function initializeMap() {
    const mapContainer = document.getElementById('stores-map');
    
    if (mapContainer) {
      console.log('Map would be initialized here with an actual map API');
      // In a real implementation, you would initialize a map here
      // For example: new google.maps.Map(mapContainer, options);
    }
  }
  
  // Initialize map
  initializeMap();
});