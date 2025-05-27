// Form validation

export function setupFormValidation() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form fields
      const firstName = document.getElementById('first-name');
      const lastName = document.getElementById('last-name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      
      // Reset error messages
      const errorElements = document.querySelectorAll('.error-message');
      errorElements.forEach(element => element.textContent = '');
      
      // Validate fields
      let isValid = true;
      
      if (!firstName.value.trim()) {
        showError(firstName, 'First name is required');
        isValid = false;
      }
      
      if (!lastName.value.trim()) {
        showError(lastName, 'Last name is required');
        isValid = false;
      }
      
      if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
      }
      
      if (!message.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
      }
      
      // If form is valid, show success message
      if (isValid) {
        const formFields = contactForm.querySelector('.form-fields');
        const successMessage = contactForm.querySelector('.success-message');
        
        formFields.classList.add('hidden');
        successMessage.classList.remove('hidden');
        
        // Reset form
        contactForm.reset();
        
        // Simulate form submission to backend
        console.log('Form submitted successfully!');
      }
    });
  }
  
  // Helper functions
  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    input.classList.add('border-red-500');
    errorElement.textContent = message;
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}