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

function mostrarDetalles() {
    mostrarPersona();
}
window.addEventListener("load", mostrarDetalles);