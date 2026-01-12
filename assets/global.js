/**
 * Global JavaScript
 * Lightweight utilities for the lookbook theme
 */

(function() {
  'use strict';

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Smooth scroll for anchor links
    initSmoothScroll();
    
    // Lazy load images (native lazy loading with fallback)
    initLazyImages();
    
    // Product card interactions
    initProductCards();
  }

  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  function initLazyImages() {
    // Native lazy loading is supported in modern browsers
    // This is a fallback for older browsers
    if ('loading' in HTMLImageElement.prototype) {
      return; // Native support
    }

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for very old browsers
      lazyImages.forEach(img => {
        img.src = img.dataset.src || img.src;
      });
    }
  }

  function initProductCards() {
    const productCards = document.querySelectorAll('.product-card-editorial, .product-card-minimal');
    
    productCards.forEach(card => {
      // Add subtle hover effects
      card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease';
      });

      // Future: Add click handlers for product details
      // card.addEventListener('click', function() {
      //   const productId = this.dataset.productId;
      //   // Handle product click
      // });
    });
  }

  // Utility: Format money
  window.formatMoney = function(cents, format = '${{amount}}') {
    if (typeof cents === 'string') {
      cents = parseInt(cents, 10);
    }
    const value = (cents / 100).toFixed(2);
    return format.replace(/\{\{\s*amount\s*\}\}/, value);
  };

  // Utility: Debounce function
  window.debounce = function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

})();
