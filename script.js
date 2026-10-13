const formulario = document.getElementById("appointment");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("name").value.trim();
  const servicio = document.getElementById("service").value;

  const saludo = nombre
    ? `Hola, soy ${nombre}.`
    : "Hola.";

  const mensaje =
    `${saludo} Quiero solicitar una cita para ` +
    `${servicio.toLowerCase()} en Estética Ilusión. ` +
    "¿Qué horarios tienen disponibles y cuál es el precio?";

  const enlace =
    "https://wa.me/528712322023?text=" +
    encodeURIComponent(mensaje);

  window.open(enlace, "_blank", "noopener");
});