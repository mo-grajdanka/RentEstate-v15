const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  burger.querySelectorAll('span').forEach((bar, i) => {
    if (i === 0) {
      bar.classList.toggle('rotate-45');
      bar.classList.toggle('translate-x-1');
      bar.classList.toggle('translate-y-1');
    }
    if (i === 1) {
      bar.classList.toggle('opacity-0');
    }
    if (i === 2) {
      bar.classList.toggle('-rotate-45');
      bar.classList.toggle('translate-x-1');
      bar.classList.toggle('-translate-y-1');
    }
  });
});


