document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita recarga

  const emailElement = document.getElementById("email");
  const passwordElement = document.getElementById("password");
  const email = emailElement ? emailElement.value.trim() : "";
  const password = passwordElement ? passwordElement.value.trim() : "";

  // Aquí puedes enviar estos datos a tu servidor o sistema de autenticación
  if (email && password) {
    alert(`Iniciaste sesión con:\nEmail: ${email}`);
    // Aquí podrías redirigir o continuar con la lógica real
  } else {
    alert("Por favor completa todos los campos.");
  }
});