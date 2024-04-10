const DESCUENTO = 0.85
const RECARGO_CREDITO = 1.08
const RECARGO_DEBITO = 1.04


let producto = parseInt(
  prompt(`Ingrese el codigo del producto que desea adquirir
1-Auricular Gamer Sony: $25.000
2-Teclado Mecanico Logitech: $22.000
3-Mouse Inalambrico Logitech: $18.000
4-Gabinete Falcom s-800: $12.000
0- para SALIR`)
);

let total = 0;
while (producto !== 0) {
  switch (producto) {
    case 1:
      total += 25000;
      alert("Agregaste a tu carrito un : Auricular Gamer Sony🎧");
      break;
    case 2:
      total += 22000;
      alert("Agregaste a tu carrito un : Teclado Mecanico Logitech⌨");
      break;
    case 3:
      total += 18000;
      alert("Agregaste a tu carrito un : Mouse Inalambrico Logitech🖱");
      break;
    case 4:
      total += 12000;
      alert("Agregaste a tu carrito un : Gabinete Falcom s-800🖥");
      break;
    default:
      alert(
        "El codigo ingresado es invalido, vuelva a seleccionar o presione 0 para SALIR.❌"
      );
      break;
  }
  producto = parseInt(
    prompt(`Ingrese el codigo del producto que desea adquirir
  1-Auricular Gamer Sony: $25.000
  2-Teclado Mecanico Logitech: $22.000
  3-Mouse Inalambrico Logitech: $18.000
  4-Gabinete Falcom s-800: $12.000
  0- para SALIR`)
  );
}
if (total !== 0){
let pago = parseInt(prompt((`El monto de su compra hasta el momento es de ${total} , como desea abonar? :
1-Efectivo (Tenemos un 15% de descuento)
2-Debito  (Tiene un recargo del 4%)
3-Credito ("Tiene un recargo del 8%)`)))
while (pago<1 || pago>3 || isNaN(pago)  ){

    alert("Elija una forma de metodo valida por favor ✔")

    pago = parseInt(prompt((`El monto de su compra hasta el momento es de ${total} , como desea abonar? :
1-Efectivo (Tenemos un 15% de descuento)
2-Debito  (Tiene un recargo del 4%)
3-Credito ("Tiene un recargo del 8%)`)))

}
if (pago === 1) {
    total = pagoCEfectivo(total,DESCUENTO)
}else if (pago === 2){
    total = pagoCDebito(total,RECARGO_DEBITO)
    
}else if (pago === 3 ) {
    total = pagoCCredito(total,RECARGO_CREDITO)
   }

function pagoCEfectivo(total, desc) {
    return total * desc
}

function pagoCCredito(total, recargoC ){
    return total * recargoC
}

function pagoCDebito(total, recargoD ){
    return total * recargoD
}

alert(`El precio final de su compra es de $: ${total}
 A la brevedad le enviaremos un ticket al email sobre como retirar el producto
 Gracias por confiar en nosotros 😉🙌`)
;    }