// Testimonials carousel functionality

export function setupCarousel() {
  const carousel = document.querySelector('.testimonials-carousel');
  const slides = carousel?.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.querySelector('.carousel-dots');
  
  if (carousel && slides && slides.length > 0) {
    let currentSlide = 0;
    
    // Create dots for each slide
    if (dotsContainer) {
      slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (index === 0) {
          dot.classList.add('active');
        }
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });
    }
    
    // Show initial slide
    showSlide(currentSlide);
    
    // Next slide button
    const nextButton = carousel.querySelector('.carousel-next');
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      });
    }
    
    // Previous slide button
    const prevButton = carousel.querySelector('.carousel-prev');
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      });
    }
    
    // Auto-advance slides
    let slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
    
    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
      slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }, 5000);
    });
    
    // Helper functions
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.opacity = '0';
        slide.style.transform = 'translateX(20px)';
        slide.style.zIndex = '-1';
        
        setTimeout(() => {
          slide.classList.add('hidden');
        }, 300);
      });
      
      setTimeout(() => {
        slides[index].classList.remove('hidden');
        slides[index].style.opacity = '1';
        slides[index].style.transform = 'translateX(0)';
        slides[index].style.zIndex = '1';
      }, 300);
      
      // Update dots
      const dots = dotsContainer?.querySelectorAll('.carousel-dot');
      if (dots) {
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }
    }
    
    function goToSlide(index) {
      currentSlide = index;
      showSlide(currentSlide);
    }
  }
}