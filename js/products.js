document.addEventListener('DOMContentLoaded', function() {
  // Category Tabs Filter
  const categoryTabs = document.querySelectorAll('.category-tab');
  const productCards = document.querySelectorAll('.product-card');
  
  function filterProducts(category) {
    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      
      if (category === 'all' || cardCategory === category) {
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
  
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      categoryTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Filter products
      const category = tab.getAttribute('data-category');
      filterProducts(category);
    });
  });
  
  // Check URL hash for category filter
  function checkHashForCategory() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const categoryTab = document.getElementById(hash);
      if (categoryTab) {
        // Simulate click on the category tab
        categoryTab.click();
      }
    }
  }
  
  // Check hash on page load
  checkHashForCategory();
  
  // Listen for hash changes
  window.addEventListener('hashchange', checkHashForCategory);
  
  // Product Animation on Scroll
  function animateProductsOnScroll() {
    const products = document.querySelectorAll('.product-card');
    const windowHeight = window.innerHeight;
    
    products.forEach((product, index) => {
      const productTop = product.getBoundingClientRect().top;
      if (productTop < windowHeight - 100) {
        setTimeout(() => {
          product.classList.add('animate-fadeIn');
        }, index * 100);
      }
    });
  }
  
  window.addEventListener('scroll', animateProductsOnScroll);
  animateProductsOnScroll(); // Check on initial load
});