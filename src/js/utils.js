/**
 * Utility functions for Yataş website
 */

/**
 * Throttle function to limit how often a function runs
 * 
 * @param {Function} callback - Function to throttle
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Throttled function
 */
export function throttle(callback, delay = 200) {
  let isThrottled = false;
  let savedArgs = null;
  let savedThis = null;
  
  return function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }
    
    callback.apply(this, args);
    isThrottled = true;
    
    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, delay);
  };
}

/**
 * Debounce function to delay execution until after a wait period
 * 
 * @param {Function} callback - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(callback, wait = 300) {
  let timeoutId = null;
  
  return function(...args) {
    const context = this;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      callback.apply(context, args);
    }, wait);
  };
}

/**
 * Formats price to Turkish Lira format
 * 
 * @param {number} price - Price to format
 * @returns {string} - Formatted price string
 */
export function formatPrice(price) {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

/**
 * Creates a simple animation for counting up to a target number
 * 
 * @param {HTMLElement} element - Element to update with count
 * @param {number} start - Starting number
 * @param {number} end - Ending number
 * @param {number} duration - Duration in milliseconds
 */
export function animateCounter(element, start, end, duration = 2000) {
  let startTimestamp = null;
  
  function step(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    
    element.textContent = value;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  
  window.requestAnimationFrame(step);
}

/**
 * Gets current page name from URL
 * 
 * @returns {string} - Current page name
 */
export function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop();
  
  if (!page || page === '') {
    return 'index.html';
  }
  
  return page;
}