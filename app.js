let total = 0;
let primerProducto = true;

function agregarAlCarrito(nombre, precio) {
    const lista = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total-pago');

    if (primerProducto) {
        lista.innerHTML = '';
        primerProducto = false;
    }

    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = `${nombre} - $${precio}`;
    lista.appendChild(nuevoItem);

    total += precio;
    totalElemento.textContent = total;
}