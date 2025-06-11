


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    if (items.length) {
        items[0].classList.add('active');
    }
    setTimeout(autoSlide, 5000); // Start the automatic sliding
});





/* BOTÃO RESPONSIVO PARA DISP MÓVEIS DA NAVBAR */
// Adicione este código ao seu script.js
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');

    // Evento de clique no botão de navegação
    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Alterna a classe 'active' da navbar
    });
});



document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          const offset = 50; // Ajuste conforme o tamanho da navbar
          const targetPosition = targetSection.offsetTop - offset;

          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      }
  });
});

  