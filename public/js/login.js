const form = document.getElementById('login-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const logForm = event.target;
  const { name, password } = logForm;
  const response = await fetch('api/login', {
    method: 'POST',
    body: JSON.stringify({
      name: name.value,
      password: password.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  if (result.success) {
    window.location.href = '/';
  }
});
