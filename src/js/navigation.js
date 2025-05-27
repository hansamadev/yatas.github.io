// Navigation functionality

export function setupNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.querySelector('header');
  
  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
      
      // Toggle between menu and close icons
      const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
      const closeIcon = mobileMenuBtn.querySelector('.close-icon');
      
      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileMenu && 
        !mobileMenu.contains(e.target) && 
        !mobileMenuBtn.contains(e.target) && 
        !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      
      // Reset icons
      const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
      const closeIcon = mobileMenuBtn.querySelector('.close-icon');
      
      if (menuIcon && closeIcon) {
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }
  });
  
  // Transparent header that changes on scroll
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-white', 'shadow-md');
        header.classList.remove('bg-transparent');
      } else {
        header.classList.remove('bg-white', 'shadow-md');
        header.classList.add('bg-transparent');
      }
    });
  }
  
  // Set active navigation link based on current page
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname;
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPage.includes(href) && href !== '/') {
      link.classList.add('active');
    } else if (currentPage === '/' && href === 'index.html') {
      link.classList.add('active');
    }
  });
}