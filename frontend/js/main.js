// Theme Toggle
function initTheme() {
  const savedTheme = localStorage.getItem('ev-blog-theme') || 'light';
  document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('ev-blog-theme', isDark ? 'dark' : 'light');
    });
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Active Navigation Link
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const linkFile = href.split('/').pop();
    
    // Check if current file matches link file, or if both are index/home
    const isActive = 
      linkFile === currentFile ||
      (currentFile === '' && linkFile === 'index.html') ||
      (currentFile === 'index.html' && linkFile === 'index.html') ||
      (currentPath.endsWith('/') && linkFile === 'index.html');
    
    if (isActive) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}


// Contact Form Submission
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent successfully! We\'ll get back to you soon.');
      contactForm.reset();
    });
  }
}

// Custom Cursor
function initCustomCursor() {
  // Check if mobile device
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (isMobile) return;

  // Create cursor elements
  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor-dot';
  document.body.appendChild(cursorDot);

  const cursorCircle = document.createElement('div');
  cursorCircle.className = 'custom-cursor-circle';
  document.body.appendChild(cursorCircle);

  let mouseX = 0;
  let mouseY = 0;
  let circleX = 0;
  let circleY = 0;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update dot cursor immediately
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });

  // Animate circle with delay
  function animateCircle() {
    // Calculate distance between circle and mouse
    const dx = mouseX - circleX;
    const dy = mouseY - circleY;
    
    // Move circle towards mouse with easing
    circleX += dx * 0.1;
    circleY += dy * 0.1;
    
    cursorCircle.style.left = circleX + 'px';
    cursorCircle.style.top = circleY + 'px';
    
    requestAnimationFrame(animateCircle);
  }
  
  animateCircle();

  // Expand circle on hover over interactive elements
  const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .nav-link');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursorCircle.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
      cursorCircle.classList.remove('hover');
    });
  });

  // Hide cursor when mouse leaves window
  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorCircle.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
    cursorCircle.style.opacity = '1';
  });
}

// FAQ Accordion
function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.closest('.faq-item');
      const answer = faqItem.querySelector('.faq-answer');
      const icon = question.querySelector('.faq-icon');
      const isOpen = answer.classList.contains('open');
      
      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          const otherAnswer = item.querySelector('.faq-answer');
          const otherIcon = item.querySelector('.faq-icon');
          otherAnswer.classList.remove('open');
          otherIcon.style.transform = 'rotate(0deg)';
        }
      });
      
      // Toggle current FAQ item
      if (isOpen) {
        answer.classList.remove('open');
        icon.style.transform = 'rotate(0deg)';
      } else {
        answer.classList.add('open');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// Initialize all functions on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  setActiveNavLink();
  initContactForm();
  initCustomCursor();
  initFAQ();
});

