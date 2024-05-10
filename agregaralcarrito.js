var carrito = [];

var carrito = [];
function seleccionarProducto() {
    let spancantidad = document.getElementById("btnVerCarrito");
    if (carrito.length == 0) {
        spancantidad.innerHTML = "🛒";
    } else {
        spancantidad.innerHTML = "🛒" + (carrito.length);
    }
}

function actualizarCantidadCarrito() {
    let spancantidad = document.getElementById("btnVerCarrito");
    spancantidad.innerHTML = "🛒" + carrito.length;
}

function mostrarModal(producto) {
    carrito.push(producto);
    actualizarCantidadCarrito(); // Actualiza la cantidad visible en el botón del carrito
    actualizarListaCarrito(); // Actualiza la lista del carrito
    document.getElementById('modal').showModal();
}

function actualizarListaCarrito() {
    var listaProductos = document.getElementById("lista-productos-agregados");
    listaProductos.innerHTML = ""; // Limpia la lista antes de agregar nuevos elementos

    carrito.forEach(function(producto) {
        var productoElement = document.createElement("li");
        productoElement.textContent = producto;
        listaProductos.appendChild(productoElement);
    });
}

function mostrarCarrito() {
    if (carrito.length == 0) {
        document.getElementById('lista-productos-agregados').textContent = "El carrito está vacío";
    }
    document.getElementById('modal').showModal();
}

function cerrarModal() {
    document.getElementById('modal').close();
}

function cargarPagina(){
    // Eliminar eventos click previos para evitar duplicados
    var botonesAñadir = document.querySelectorAll(".botones");
    botonesAñadir.forEach(function(boton) {
        boton.removeEventListener("click", seleccionarProducto);
    });

    // Añadir evento click a cada botón de "Añadir al carrito"
    botonesAñadir.forEach(function(boton) {
        boton.addEventListener("click", seleccionarProducto);
    });

    // Asignar evento click al botón del carrito
    document.getElementById("btnVerCarrito").addEventListener("click", mostrarCarrito);
}

window.addEventListener("load", cargarPagina);















