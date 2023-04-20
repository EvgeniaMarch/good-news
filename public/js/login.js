const form = document.getElementById('login-form');
const errorDiv = document.getElementById('errorDiv');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const logForm = event.target;
  const { name, password } = logForm;
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({
      login: name.value,
      password: password.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  if (result.success) {
    window.location.href = '/news';
  } else {
    errorDiv.textContent = result.message;
    // console.log(result.message);
    // console.log(errorDiv);
  }
});
