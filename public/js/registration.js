const form = document.getElementById('registr-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const registationForm = event.target;
  const { name, password, repeat } = event.target;
});
