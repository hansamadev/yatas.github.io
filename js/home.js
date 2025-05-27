document.addEventListener('DOMContentLoaded', function() {
  // Hero Slider
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let currentSlide = 0;
  let slideInterval;
  
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
  }
  
  function nextSlide() {
    const newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
  }
  
  function prevSlide() {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  }
  
  // Initialize slider
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  function stopSlideshow() {
    clearInterval(slideInterval);
  }
  
  // Event listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      prevSlide();
      stopSlideshow();
      startSlideshow();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      nextSlide();
      stopSlideshow();
      startSlideshow();
    });
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      showSlide(index);
      stopSlideshow();
      startSlideshow();
    });
  });
  
  // Start slideshow on page load
  startSlideshow();
  
  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial');
  const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
  
  let currentTestimonial = 0;
  let testimonialInterval;
  
  function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    testimonialDots[index].classList.add('active');
    
    currentTestimonial = index;
  }
  
  function nextTestimonial() {
    const newIndex = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(newIndex);
  }
  
  // Initialize testimonial slider
  function startTestimonialSlideshow() {
    testimonialInterval = setInterval(nextTestimonial, 4000);
  }
  
  function stopTestimonialSlideshow() {
    clearInterval(testimonialInterval);
  }
  
  testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      showTestimonial(index);
      stopTestimonialSlideshow();
      startTestimonialSlideshow();
    });
  });
  
  // Start testimonial slideshow on page load
  if (testimonials.length > 0) {
    startTestimonialSlideshow();
  }
});