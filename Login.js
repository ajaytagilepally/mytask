const validUsername = 'ajay';
const validPassword = '12345';

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const enteredUsername = document.getElementById('username').value;
  const enteredPassword = document.getElementById('password').value;

  if (enteredUsername === validUsername && enteredPassword === validPassword) {
    window.location.href = 'Homepage.html?username=' + encodeURIComponent(enteredUsername);
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
