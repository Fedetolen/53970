let opcion = parseInt(
  prompt(`Bienvenido, seleccione:
1- Para buscar zapatillas por su nombre/marca
2- Para buscar zapatillas por su precio 
3- Para buscar zapatillas por su color
4- Para saber el costo de adquirir un par de TODOS nuestros productos`)
);

if (opcion === 1) {
  buscar = prompt("Ingrese el nombre de lo que busca");
  buscarXNombre(buscar.toUpperCase());
} else if (opcion === 2) {
  buscar = parseInt(prompt("Ingrese el monto que esta dispuesto a gastar"));
  buscarXPrecio(buscar);
} else if (opcion === 3) {
  buscar = prompt("Ingrese el color que busca");
  buscarXColor(buscar.toLowerCase());
} else if (opcion === 4) {
   calcularTotal()
  }

function buscarXNombre(buscar) {
  const encontrado = catalogo.filter((item) => item.nombre.includes(buscar));
  if (encontrado.length > 0) {
    console.table(encontrado);
  } else {
    alert("Lo siento, no contamos con el producto solicitado");
  }
}

function buscarXPrecio(buscar) {
  const encontrado = catalogo.filter((item) => item.precio <= buscar);

  if (encontrado.length > 0) {
    console.table(encontrado);
  } else {
    alert("Lo siento, no contamos con productos de ese monto");
  }
}

function buscarXColor(buscar) {
  const encontrado = catalogo.filter((item) => item.colores.includes(buscar));

  if (encontrado,length > 0 ) {
    console.table(encontrado);
  } else {
    alert("Lo siento, no contamos con el color solicitado");
  }
}

function calcularTotal() {
    const total = catalogo.reduce((total,item) => {
       return total + item.precio
    },0)

    alert(`El total por adquirir un par de TODOS nuestros productos es de : $${total.toLocaleString('es-AR')}`)
}
