document.addEventListener('DOMContentLoaded', () => {
    // Mobilmeny-toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }
  
    // Smooth scrolling för ankarlänkar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Enkel e-postvalidering
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', e => {
        const email = form.querySelector('input[type="email"]');
        if (email && !email.value.includes('@')) {
          e.preventDefault();
          alert('Vänligen ange en giltig e-postadress.');
        }
      });
    }
  });
  