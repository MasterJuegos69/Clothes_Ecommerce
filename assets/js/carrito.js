const productos = [
  {
    id: 1,
    nombre: "Camisa Casual Hombre",
    precio: 89900,
    imagen: "assets/img/camisa-hombre.jpg",
  },
  {
    id: 2,
    nombre: "Blusa Floral Mujer",
    precio: 74500,
    imagen: "assets/img/blusa-mujer.jpg",
  },
  {
    id: 3,
    nombre: "Jeans Unisex",
    precio: 110000,
    imagen: "assets/img/jeans-unisex.jpg",
  },
];

let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

function mostrarCarrito() {
  const tbody = document.getElementById("carrito-items");
  if (!tbody) return;
  tbody.innerHTML = "";

  let total = 0;
  carrito.forEach((item) => {
    const producto = productos.find((p) => p.id === item.id);
    if (!producto) return;

    const subtotal = producto.precio * item.cantidad;
    total += subtotal;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="align-middle">
        <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 80px; height: auto; object-fit: contain; margin-right: 10px;" />
        ${producto.nombre}
      </td>
      <td class="align-middle">$${producto.precio.toLocaleString()}</td>
      <td class="align-middle">${item.cantidad}</td>
      <td class="align-middle">$${subtotal.toLocaleString()}</td>
      <td class="align-middle">
        <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${item.id})">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
	
	document.getElementById("carrito-total").textContent = total.toLocaleString();
	const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
	document.getElementById("contador-carrito").textContent = cantidadTotal;
	actualizarContadorIcono();
  });

  document.getElementById("carrito-total").textContent = total.toLocaleString();
  document.getElementById("contador-carrito").textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
}

function eliminarProducto(id) {
  carrito = carrito.filter((item) => item.id !== id);
  guardarCarrito();
  mostrarCarrito();
  actualizarContadorIcono();
}

function guardarCarrito() {
  sessionStorage.setItem("carrito", JSON.stringify(carrito));
}

document.getElementById("vaciar-carrito")?.addEventListener("click", () => {
  carrito = [];
  guardarCarrito();
  mostrarCarrito();
  actualizarContadorIcono();
});

document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();
  actualizarContadorIcono();
  let visitas = parseInt(sessionStorage.getItem("contadorVisitas") || "0");
  visitas++;
  sessionStorage.setItem("contadorVisitas", visitas);
  const contadorVisitasSpan = document.getElementById("contador-visitas");
  if (contadorVisitasSpan) contadorVisitasSpan.textContent = visitas;
});

function actualizarContadorIcono() {
  const contadorIcono = document.getElementById("contador-carrito-icono");
  if (!contadorIcono) return;
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  contadorIcono.textContent = cantidadTotal;
}