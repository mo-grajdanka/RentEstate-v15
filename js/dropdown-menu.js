document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu');

    function show() { menu.classList.remove('hidden') }
    function hide() { menu.classList.add('hidden') }

   
    dropdown.addEventListener('mouseenter', show);
    dropdown.addEventListener('mouseleave', hide);
    menu.addEventListener('mouseenter', show);
    menu.addEventListener('mouseleave', hide);
  });
});

});
