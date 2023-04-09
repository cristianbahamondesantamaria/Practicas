function mostrarPersona() {
    const detalles = JSON.parse(localStorage.getItem("personaDetalles"));
    const divPrincipal = $('#Detalles');

    let colomleft = $('<div class="col-md-4"></div>');
    let imagen = $('<img class="img-fluid rounded-start" src="' + detalles.imagen + '">');
    colomleft.append(imagen);
    let colomright = $('<div class="col-md-8"></div>');
    let cardBody = $('<div class="card-body"></div>');
    let titulo = $('<h5 class="card-title">' + detalles.nombre + '</h5>');
    var muerte = "Actualidad" === detalles.fechaDefuncion ? "" : "y fallecio en " + detalles.fechaDefuncion;
    let descripcion = $('<p class="card-text">' + detalles.nombre + ' nació el '
        + detalles.fechaNacimiento + ' '
        + muerte +
        '</p>');
    let wikipedia = $('<button class="btn btn-primary">Ir a Wikipedia</button>');
    wikipedia.click(function () {
        window.open(detalles.wikipedia);
    });
    cardBody.append(titulo);
    cardBody.append(descripcion);
    cardBody.append(wikipedia);
    colomright.append(cardBody);
    divPrincipal.append(colomleft);
    divPrincipal.append(colomright);
}

function mostrarProductos() {
    const detalles = JSON.parse(localStorage.getItem("personaDetalles"));
    const productos = JSON.parse(localStorage.getItem("productos"));
    const divPrincipal = $('#Productos');
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].personas.includes(detalles.nombre)) {
            let cartaDiv = $('<div class="card d-flex align-items-center justify-content-center m-5 " style="max-width: 540px;"></div>');
            let row = $('<div class="row g-0"></div>');

            let colomleft = $('<div class="col-md-4"></div>');
            let imagen = $('<img class="img-fluid rounded-start" src="' + productos[i].imagen + '">');
            colomleft.append(imagen);

            let colomright = $('<div class="col-md-8"></div>');
            let cartaBody = $('<div class="card-body"></div>');
            let titulo = $('<h5 class="card-title">' + productos[i].nombre + '</h5>');
            let detalles = $('<button class="btn btn-primary">Ir a ' + productos[i].nombre + '</button>');
            detalles.click(function () {
                localStorage.setItem("productoDetalles", JSON.stringify(productos[i]));
                window.location.href = "detallesProducto.html";
            });
            cartaBody.append(titulo);
            cartaBody.append(detalles);
            colomright.append(cartaBody);
            row.append(colomleft);
            row.append(colomright);
            cartaDiv.append(row);
            divPrincipal.append(cartaDiv);
        }
    }
}

function mostrarEntidades() {
    const detalles = JSON.parse(localStorage.getItem("personaDetalles"));
    const entidades = JSON.parse(localStorage.getItem("entidades"));
    const divPrincipal = $('#Entidades');
    for (var i = 0; i < entidades.length; i++) {
        if (entidades[i].personas.includes(detalles.nombre)) {
            let cartaDiv = $('<div class="card d-flex align-items-center justify-content-center m-5 " style="max-width: 540px;"></div>');
            let row = $('<div class="row g-0"></div>');

            let colomleft = $('<div class="col-md-4"></div>');
            let imagen = $('<img class="img-fluid rounded-start" src="' + entidades[i].imagen + '">');
            colomleft.append(imagen);

            let colomright = $('<div class="col-md-8"></div>');
            let cartaBody = $('<div class="card-body"></div>');
            let titulo = $('<h5 class="card-title">' + entidades[i].nombre + '</h5>');
            let detalles = $('<button class="btn btn-primary">Ir a ' + entidades[i].nombre + '</button>');
            detalles.click(function () {
                localStorage.setItem("enitdadDetalles", JSON.stringify(entidades[i]));
                window.location.href = "detallesProducto.html";
            });
            cartaBody.append(titulo);
            cartaBody.append(detalles);
            colomright.append(cartaBody);
            row.append(colomleft);
            row.append(colomright);
            cartaDiv.append(row);
            divPrincipal.append(cartaDiv);
        }
    }
}

function mostrarDetalles() {
    mostrarPersona();
    mostrarProductos();
    mostrarEntidades();
}
window.addEventListener("load", mostrarDetalles);