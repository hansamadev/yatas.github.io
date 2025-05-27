// Product functionality

export function setupProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productItems = document.querySelectorAll('.product-item');
  
  if (filterButtons.length && productItems.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('bg-primary-600', 'text-white'));
        
        // Add active class to clicked button
        button.classList.add('bg-primary-600', 'text-white');
        
        const filter = button.getAttribute('data-filter');
        
        // Filter products
        productItems.forEach(item => {
          if (filter === 'all') {
            item.style.display = 'block';
          } else {
            const category = item.getAttribute('data-category');
            if (category === filter) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          }
        });
      });
    });
  }
  
  // Product modal functionality
  const productCards = document.querySelectorAll('.product-card');
  const productModal = document.getElementById('product-modal');
  
  if (productCards.length && productModal) {
    productCards.forEach(card => {
      card.addEventListener('click', () => {
        // Get product details from card
        const image = card.querySelector('img').src;
        const title = card.querySelector('.product-title').textContent;
        const price = card.querySelector('.product-price')?.textContent || '';
        const description = card.getAttribute('data-description') || 'No description available';
        
        // Update modal with product details
        productModal.querySelector('.modal-image').src = image;
        productModal.querySelector('.modal-title').textContent = title;
        if (productModal.querySelector('.modal-price')) {
          productModal.querySelector('.modal-price').textContent = price;
        }
        productModal.querySelector('.modal-description').textContent = description;
        
        // Show modal
        productModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      });
    });
    
    // Close modal on button click
    const closeModalBtn = productModal.querySelector('.close-modal');
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        productModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    }
    
    // Close modal when clicking outside
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        productModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }
}