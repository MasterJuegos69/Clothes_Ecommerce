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

const contenedorProductos = document.getElementById("items");

function mostrarProductos() {
  if (!contenedorProductos) return;
  contenedorProductos.innerHTML = "";
  productos.forEach((prod) => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <div class="card h-100">
        <img src="${prod.imagen}" alt="${prod.nombre}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="card-text">$${prod.precio.toLocaleString()}</p>
          <button class="btn btn-dark" onclick="agregarProducto(${prod.id})">Agregar al carrito</button>
        </div>
      </div>
    `;
    contenedorProductos.appendChild(col);
	actualizarContadorIcono();
  });
}

let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

function agregarProducto(id) {
  const productoExistente = carrito.find((item) => item.id === id);
  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({ id, cantidad: 1 });
  }
  sessionStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito");
  actualizarContadorIcono();
}

document.addEventListener("DOMContentLoaded", mostrarProductos);

function actualizarContadorIcono() {
  const contadorIcono = document.getElementById("contador-carrito-icono");
  if (!contadorIcono) return;
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  contadorIcono.textContent = cantidadTotal;
}