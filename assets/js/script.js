document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navList = document.querySelector('nav ul');
  
    toggleBtn.addEventListener('click', function (event) {
      event.stopPropagation(); // Detiene la propagación para evitar cerrar inmediatamente el menú
      navList.classList.toggle('active');
    });
  
    // Cierra el menú cuando se hace clic fuera de él
    document.addEventListener('click', function (event) {
      const isClickInside = navList.contains(event.target);
      const isToggleBtn = toggleBtn.contains(event.target);
      if (!isClickInside && !isToggleBtn) {
        navList.classList.remove('active');
      }
    });
  
    // Cierra el menú al hacer clic en un elemento del menú (opcional)
    navList.querySelectorAll('li').forEach(function (item) {
      item.addEventListener('click', function () {
        navList.classList.remove('active');
      });
    });
  });
  