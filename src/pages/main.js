// Lottie Animations
const heroAnimation = lottie.loadAnimation({
  container: document.getElementById('hero-lottie-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/coding.json'
});

const aboutAnimation = lottie.loadAnimation({
  container: document.getElementById('lottie-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/traveler.json'
});

// Typed.js Animation
const typed = new Typed('#name', {
  strings: [
    "Cyberknight ⚔️",
    "a UI/UX Enthusiast 🎨",
    "a Bug Slayer 🐞",
    "your next tech partner 🤝"
  ],
  typeSpeed: 45,
  backSpeed: 60,
  backDelay: 1000,
  cursorChar: '_',
  shuffle: false,
  smartBackspace: true,
  loop: true
});

// Main Animation Timeline
window.addEventListener('load', function() {
  // Register plugins
  gsap.registerPlugin(ScrollTrigger);
  
  // First make sure all elements are visible
  gsap.set([
    ".project-card",
    ".contact-form-wrapper",
    ".info-card",
    ".projects-section h2",
    ".projects-section .subtitle",
    ".contact-section h2",
    ".contact-section .subtitle"
  ], {
    opacity: 1,
    y: 0,
    x: 0
  });

  // Configure ScrollTrigger globally
  ScrollTrigger.config({
    autoRefreshEvents: "DOMContentLoaded,load",
    ignoreMobileResize: true
  });

  // Hero section animations
  gsap.from(".hero h1", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
  
  gsap.from(".hero h2", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
    ease: "power3.out"
  });
  
  gsap.from(".welcome-msg", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    ease: "power3.out"
  });
  
  gsap.from(".hero-btns a", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.7,
    ease: "power3.out"
  });
  
  gsap.from("#hero-lottie-animation", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.4,
    ease: "power3.out"
  });

  // About section animation
  gsap.from(".about-card", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Skills section animation
  gsap.from(".terminal-card", {
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Projects section animations - FIXED
  gsap.from(".projects-section h2, .projects-section .subtitle", {
    scrollTrigger: {
      trigger: ".projects-section",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: ".projects-grid",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power3.out"
  });

  // Contact section animations - FIXED
  gsap.from(".contact-section h2, .contact-section .subtitle", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".contact-form-wrapper", {
    scrollTrigger: {
      trigger: ".contact-grid",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".info-card", {
    scrollTrigger: {
      trigger: ".contact-grid",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    x: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out"
  });

  // Footer animation
  gsap.from(".footer", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Interactive elements animations
  // Project cards hover
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    const img = card.querySelector(".project-image img");
    
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
        duration: 0.4,
        ease: "power2.out"
      });
      gsap.to(img, {
        scale: 1.1,
        duration: 0.6,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
        duration: 0.4,
        ease: "power2.out"
      });
      gsap.to(img, {
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      });
    });
  });

  // Floating badges
  const badges = document.querySelectorAll(".project-badge");
  badges.forEach(badge => {
    gsap.to(badge, {
      y: -5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });

  // Submit button arrow
  const submitBtn = document.querySelector(".submit-btn");
  const submitArrow = submitBtn.querySelector("svg");
  
  submitBtn.addEventListener("mouseenter", () => {
    gsap.to(submitArrow, {
      x: 5,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  submitBtn.addEventListener("mouseleave", () => {
    gsap.to(submitArrow, {
      x: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  // Force refresh after all animations are set up
  setTimeout(() => ScrollTrigger.refresh(), 500);
  
  // Mark body as ready
  document.body.classList.add("gsap-ready");
});

// Contact Form Submission
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form");
  const customAlert = document.getElementById('contact-custom-alert');
  const alertMessage = document.querySelector('.contact-alert-message');
  const alertIcon = document.querySelector('.contact-alert-icon');
  const alertCloseBtn = document.querySelector('.contact-alert-close-btn');

  function showAlert(icon, message, isSuccess) {
    alertIcon.className = 'contact-alert-icon';
    alertIcon.textContent = icon;
    alertMessage.textContent = message;
    
    if (isSuccess) {
      alertIcon.classList.add('success-animation');
      document.querySelector('.contact-alert-content').style.boxShadow = 
        '0 10px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(74, 222, 128, 0.3), 0 0 30px rgba(74, 222, 128, 0.2)';
    } else if (icon === '❌') {
      alertIcon.classList.add('error-animation');
      document.querySelector('.contact-alert-content').style.boxShadow = 
        '0 10px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(248, 113, 113, 0.3), 0 0 30px rgba(248, 113, 113, 0.2)';
    } else {
      alertIcon.classList.add('warning-animation');
      document.querySelector('.contact-alert-content').style.boxShadow = 
        '0 10px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(250, 204, 21, 0.3), 0 0 30px rgba(250, 204, 21, 0.2)';
    }
    
    customAlert.classList.add('active');
  }

  function closeAlert() {
    customAlert.classList.remove('active');
    document.querySelector('.contact-alert-content').style.boxShadow = 
      '0 10px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(74, 222, 128, 0.2), 0 0 20px rgba(74, 222, 128, 0.1)';
  }

  alertCloseBtn.addEventListener('click', closeAlert);
  customAlert.addEventListener('click', function(e) {
    if (e.target === customAlert) {
      closeAlert();
    }
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;

    fetch(form.action, {
      method: form.method,
      body: formData
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        showAlert("✓", "Message sent successfully! I'll get back to you soon.", true);
        form.reset();
      } else {
        showAlert("❌", "Submission failed: " + (result.message || "Please try again later."), false);
      }
    })
    .catch(() => {
      showAlert("⚠️", "Network error. Please check your connection and try again.", false);
    })
    .finally(() => {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    });
  });
});

// Hamburger Menu Toggle
// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.header-content nav ul');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.header-content nav ul li a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
});