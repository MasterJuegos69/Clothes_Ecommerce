document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (nombre && apellido && email && password) {
    alert(`Registro exitoso de:\n${nombre} ${apellido}\nEmail: ${email}`);
    // Aquí podrías guardar los datos o redirigir
  } else {
    alert("Por favor completa todos los campos.");
  }
});

document.getElementById("registerForm").addEventListener("input", function() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const btn = document.getElementById("submitBtn");
  btn.disabled = !(nombre && apellido && email && password);
});