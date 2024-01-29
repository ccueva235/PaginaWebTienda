// Js/script.js
document.addEventListener('DOMContentLoaded', function () {
    var nombreProducto = localStorage.getItem('nombreProducto') || obtenerNombreProductoDesdeURL();
    var nombreProductoContainer = document.getElementById('nombreProductoContainer');
    var descripcionProductoContainer = document.getElementById('descripcionProducto');

    if (nombreProductoContainer) {
        nombreProductoContainer.innerHTML = '<h1>' + (nombreProducto || 'Producto no especificado') + '</h1>';
    }
    mostrarDescripcion(nombreProducto);
});

function validarCantidad() {
    var cantidad = parseInt(document.getElementById('cantidadInput').value);
    var advertencia = document.getElementById('advertencia');
    var nombreProductoAlmacenado = document.getElementById('nombreProductoContainer').innerText.trim();

    if (!isNaN(cantidad) && cantidad >= 1 ) {
        var mensaje = `Hola, quiero ${cantidad} ${cantidad > 1 ? 'unidades' : 'unidad'} del producto ${nombreProductoAlmacenado}.`;
        mensaje = encodeURIComponent(mensaje);
        var urlWhatsApp = `https://wa.me/914443251?text=${mensaje}`;
        window.open(urlWhatsApp, '_blank');
        advertencia.style.display = 'none';
    } else {
        advertencia.style.display = 'block';
    }
}

function mostrarDescripcion(nombre) {
    var descripcion = document.getElementById('descripcionProducto');
    var descripciones = {
        'Polera': 'Descripción de la polera: Maecenas consectetur ultricies mi vel venenatis. Curabitur risus tellus, congue non tellus at, semper dapibus turpis. Duis pellentesque, risus sit amet placerat porttitor, tortor augue volutpat ante, non dignissim odio ligula at arcu.',
        'Short': 'Descripción del short: Otra descripción para React JS',
        // Agrega más descripciones según sea necesario
    };

    if (descripcion && descripciones[nombre]) {
        descripcion.innerHTML = '<p>' + descripciones[nombre] + '</p>';
        descripcion.style.display = 'block';
    } else {
        descripcion.style.display = 'none';
    }
}

function obtenerNombreProductoDesdeURL() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('nombre');
}

function ocultarDescripcion() {
    var descripcion = document.getElementById('descripcionProducto');
    descripcion.style.display = 'none';
}

function obtenerDescripcion(nombre) {
    var descripciones = {
        'polera': 'Maecenas consectetur ultricies mi vel venenatis. Curabitur risus tellus, congue non tellus at, semper dapibus turpis. Duis pellentesque, risus sit amet placerat porttitor, tortor augue volutpat ante, non dignissim odio ligula at arcu.',
        'short': 'Otra descripción para React JS',
        // Agrega más descripciones según sea necesario
    };

    return descripciones[nombre] || 'Descripción no disponible';
}



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    var paramName = decodeURIComponent(results[2].replace(/\+/g, ' '));
    console.log('Valor del parámetro ' + name + ':', paramName);
    return paramName;
}


function irAProducto(nombreProducto) {
    // Guarda el nombre del producto en localStorage
    localStorage.setItem('nombreProducto', nombreProducto);

    // Redirige a producto.html
    window.location.href = 'producto.html';
}
