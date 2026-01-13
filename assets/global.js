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
    // Initialize starry background
    initStarryBackground();

    // Initialize header scroll effect
    initHeaderScroll();

    // Smooth scroll for anchor links
    initSmoothScroll();

    // Lazy load images (native lazy loading with fallback)
    initLazyImages();

    // Product card interactions
    initProductCards();
  }

  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const scrollThreshold = 50;

    function handleScroll() {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
  }

  function initStarryBackground() {
    // Create stars container
    const container = document.createElement('div');
    container.className = 'stars-container';
    container.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(container, document.body.firstChild);

    // Grid-based distribution for even spread
    const gridCols = 8;
    const gridRows = 12;
    const cellWidth = 100 / gridCols;
    const cellHeight = 100 / gridRows;

    // Generate stars with grid-based positioning
    function createStar(size, gridX, gridY) {
      const star = document.createElement('div');
      star.className = `star star--${size}`;

      // Position within grid cell with some randomness
      const baseX = gridX * cellWidth;
      const baseY = gridY * cellHeight;
      const offsetX = Math.random() * cellWidth * 0.8;
      const offsetY = Math.random() * cellHeight * 0.8;

      star.style.left = `${baseX + offsetX}%`;
      star.style.top = `${baseY + offsetY}%`;

      // Random twinkle timing for natural effect
      const duration = 1.5 + Math.random() * 2.5;
      const delay = Math.random() * 3;
      star.style.setProperty('--twinkle-duration', `${duration}s`);
      star.style.setProperty('--twinkle-delay', `${delay}s`);

      // Set base opacity based on size
      const baseOpacity = size === 'small' ? 0.4 : size === 'medium' ? 0.6 : 0.9;
      star.style.setProperty('--base-opacity', baseOpacity);

      return star;
    }

    // Add stars to container using grid distribution
    const fragment = document.createDocumentFragment();

    // Fill grid cells with stars - 40% chance per cell
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const rand = Math.random();
        if (rand < 0.40) {
          let size;
          if (rand < 0.25) size = 'small';
          else if (rand < 0.35) size = 'medium';
          else size = 'large';
          fragment.appendChild(createStar(size, col, row));
        }
      }
    }

    container.appendChild(fragment);
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
