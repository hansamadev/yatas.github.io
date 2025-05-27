// Main JavaScript file

// Import modules
import { setupNavigation } from './navigation.js';
import { setupProductFilters } from './products.js';
import { setupFormValidation } from './form.js';
import { setupCarousel } from './carousel.js';

// Initialize components based on current page
document.addEventListener('DOMContentLoaded', () => {
  // Setup navigation for all pages
  setupNavigation();
  
  // Setup page-specific functionality
  const currentPage = window.location.pathname;
  
  if (currentPage.includes('products.html')) {
    setupProductFilters();
  }
  
  if (currentPage.includes('contact.html')) {
    setupFormValidation();
  }
  
  // Setup components that might be on multiple pages
  const testimonialsSection = document.querySelector('.testimonials-carousel');
  if (testimonialsSection) {
    setupCarousel();
  }
  
  // Initialize AOS (Animate On Scroll) like functionality
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    fadeObserver.observe(element);
  });
});