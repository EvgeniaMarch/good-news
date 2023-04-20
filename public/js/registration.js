const form = document.getElementById('registr-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const registationForm = event.target;
  const { name, password, repeat } = registationForm;

  const response = await fetch('/api/registration', {
    method: 'POST',
    body: JSON.stringify({
      login: name.value,
      password: password.value,
      repeat: repeat.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    window.location.href = '/';
  }
});
