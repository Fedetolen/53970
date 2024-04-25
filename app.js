const productos = document.getElementById("productos");
const botonAbrirCarrito = document.getElementById("carritoIcon");
const modalBody = document.querySelector(".modal-body");
const precioFinal = document.querySelector(".precio-final");

function renderizarProd(producto) {
  const card = document.createElement("div");
  card.classList.add("col-md-4", "mb-3");

  card.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${producto.imagen}" class="card-img-top" alt="${
    producto.nombre
  }">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio: $${producto.precio}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <label for="talle" class="mb-2">Tamaño:</label>
            <select class="form-select talle-selector" aria-label="Tamaño">
              ${producto.talles
                .map((talle) => `<option>${talle}</option>`)
                .join("")}
            </select>
          </li>
          <li class="list-group-item">
            <label for="color" class="mb-2">Color:</label>
            <select class="form-select color-selector " aria-label="Color">
              ${producto.colores
                .map((color) => `<option>${color}</option>`)
                .join("")}
            </select>
          </li>
        </ul>
        <a href="#" class="btn btn-primary d-block outline-primary">Agregar al carrito</a>
      </div>
    </div>
  `;
  productos.append(card);
}

catalogo.forEach((producto) => renderizarProd(producto));

let carrito = [];

productos.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-primary")) {
    const card = e.target.parentElement.parentElement;

    const producto = {
      nombre: card.querySelector(".card-title").textContent,
      imagen: card.querySelector("img").src,
      precio: parseFloat(
        card.querySelector(".card-text").textContent.replace("Precio: $", "")
      ),
      talle: card.querySelector(".talle-selector").value,
      color: card.querySelector(".color-selector").value,
      cantidad: 1,
    };

    const existe = carrito.some(
      (item) =>
        item.nombre == producto.nombre &&
        item.color == producto.color &&
        item.talle == producto.talle
    );

    if (existe) {
      const zapatillas = carrito.map((item) => {
        if (
          item.nombre == producto.nombre &&
          item.color == producto.color &&
          item.talle == producto.talle
        ) {
          item.cantidad++;
          item.precio = parseInt(item.precio) * item.cantidad;
          return item;
        } else {
          return item;
        }
      });

      carrito = [...zapatillas];
    } else {
      carrito.push(producto);
    }
  }
  guardarCarritoEnLocalStorage();
});

const renderizarCarrito = () => {};

botonAbrirCarrito.addEventListener("click", (e) => {
   limpiarHTML();
  carrito.forEach((producto) => {
    const container = document.createElement("div");
    container.innerHTML = `
    <div class="info d-flex justify-content-between">
    <img src="${producto.imagen}" alt="${producto.nombre}" class="w-25" />
    <div class="detalles d-flex flex-column">
      <span class="nombre">${producto.nombre}</span>
      <div class="especificos">
        <span class="talle">Talle: ${producto.talle}</span>
        <span class="color">Color: ${producto.color}</span>
        </div>
        <span class="cantidad">Cantidad: ${producto.cantidad}</span>
    </div>
    <span class="precio">$${producto.precio.toLocaleString("es-AR")}</span>
    <a href="#" class="borrar-producto" data-nombre="${producto.nombre}">X</a>
  </div>
  <div class="precio-unidad"></div>
    `;

    modalBody.append(container);
  });
  actualizarPrecioTotal()
});
function actualizarPrecioTotal () {
let precioTotal = carrito.reduce((aux, total) => aux + total.precio, 0);
precioFinal.textContent = "$" + precioTotal.toLocaleString("es-AR");}

function limpiarHTML() {
  modalBody.innerHTML = "";
}

modalBody.addEventListener("click", (e) => {
  const nombreProducto = e.target.dataset.nombre;
  carrito = carrito.filter((producto) => producto.nombre !== nombreProducto);
  actualizarPrecioTotal()
  e.target.closest('.info').remove();
  guardarCarritoEnLocalStorage()
});


function guardarCarritoEnLocalStorage() {
 
  const carritoJSON = JSON.stringify(carrito);
  
 
  localStorage.setItem('carrito', carritoJSON);
}


window.addEventListener('DOMContentLoaded', () => {
  const carritoGuardado = localStorage.getItem('carrito');
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    renderizarCarrito(); // 
    actualizarPrecioTotal(); // 
  }
});

