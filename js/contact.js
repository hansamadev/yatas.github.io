document.addEventListener('DOMContentLoaded', function() {
  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const surname = document.getElementById('surname').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      const consent = document.getElementById('consent').checked;
      
      // Validate form
      if (!name || !surname || !email || !message || !consent) {
        alert('Lütfen zorunlu alanları doldurunuz.');
        return;
      }
      
      // In a real application, here you would send the form data to a server
      // For demonstration purposes, we'll just show the success message
      
      // Hide form and show success message
      contactForm.style.display = 'none';
      if (formSuccess) {
        formSuccess.classList.remove('hidden');
        formSuccess.classList.add('animate-fadeIn');
      }
      
      // Log form data to console (for demonstration)
      console.log({
        name,
        surname,
        email,
        phone,
        subject,
        message,
        consent
      });
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const toggleIcon = question.querySelector('.toggle-icon i');
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      // Close all items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherIcon = otherItem.querySelector('.toggle-icon i');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      });
      
      // Open current item if it was closed
      if (!isOpen) {
        item.classList.add('active');
        toggleIcon.classList.remove('fa-plus');
        toggleIcon.classList.add('fa-minus');
      }
    });
  });
  
  // Map Initialization (placeholder for actual map implementation)
  function initializeContactMap() {
    const mapContainer = document.getElementById('contact-map');
    
    if (mapContainer) {
      console.log('Contact map would be initialized here with an actual map API');
      // In a real implementation, you would initialize a map here
      // For example: new google.maps.Map(mapContainer, options);
    }
  }
  
  // Initialize map
  initializeContactMap();
});