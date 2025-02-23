window.onload = () => {
    const countdownElement = document.getElementById('countdown');
    const startDate = new Date('2025-04-14T10:00:00Z'); 

    function updateCountdown() {
        const now = new Date();
        const difference = startDate - now; 

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        countdownElement.textContent = `${days} days ${minutes} min.`;
    }

    setInterval(updateCountdown, 60000);
    updateCountdown();
};

new Swiper('.swiper-wrapper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });