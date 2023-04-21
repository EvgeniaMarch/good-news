const dropdown = document.querySelector('.most-popular');

dropdown.addEventListener('click', async (event) => {
  if (event.target.classList.contains('dropdown-item')) {
    console.log('hey');
  }
});
