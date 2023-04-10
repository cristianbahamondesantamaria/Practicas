function mostrarProducto(){
    const detalles = JSON.parse(localStorage.getItem("productoDetalles"));
    const divPrincipal = $('#Detalles');

    let colomleft = $('<div class="col-md-4"></div>');
    let imagen = $('<img class="img-fluid rounded-start" src="' + detalles.imagen + '">');
    colomleft.append(imagen);
    let colomright = $('<div class="col-md-8"></div>');
    let cardBody = $('<div class="card-body"></div>');
    let titulo = $('<h5 class="card-title">' + detalles.nombre + '</h5>');
    var muerte = "Actualidad" === detalles.fechaDefuncion ? "" : "y fallecio en " + detalles.fechaDefuncion;
    let descripcion = $('<p class="card-text">Se creo en '
        + detalles.fechaCreacion + ' '
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

function mostrarPersonas(){
    const detalles = JSON.parse(localStorage.getItem("productoDetalles"));
    const personas = JSON.parse(localStorage.getItem("personas"));
    const divPrincipal = $('#Personas');
    for (var i = 0; i < personas.length; i++) {
        for(var j=0; j<detalles.personas.length; j++){
            if (personas[i].nombre === detalles.personas[j]) {
                let cartaDiv = $('<div class="card d-flex align-items-center justify-content-center m-5 " style="max-width: 540px;"></div>');
                let row = $('<div class="row g-0"></div>');

                let colomleft = $('<div class="col-md-4"></div>');
                let imagen = $('<img class="img-fluid rounded-start" src="' + personas[i].imagen + '">');
                colomleft.append(imagen);

                let colomright = $('<div class="col-md-8"></div>');
                let cartaBody = $('<div class="card-body"></div>');
                let titulo = $('<h5 class="card-title">' + personas[i].nombre + '</h5>');
                let detalles = $('<button class="btn btn-primary">Ver detalles</button>');
                var persona=personas[i];
                detalles.click(function () {
                    localStorage.setItem("personaDetalles", JSON.stringify(persona));
                    window.location.href = "detallesPersona.html";
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

}

function mostrarEntidades(){
    const detalles = JSON.parse(localStorage.getItem("productoDetalles"));
    const entidades = JSON.parse(localStorage.getItem("entidades"));
    const divPrincipal = $('#Entidades');
    for (var i = 0; i < entidades.length; i++) {
        for(var j=0; j<detalles.entidades.length; j++){
            if (entidades[i].nombre === detalles.entidades[j]) {
                let cartaDiv = $('<div class="card d-flex align-items-center justify-content-center m-5 " style="max-width: 540px;"></div>');
                let row = $('<div class="row g-0"></div>');

                let colomleft = $('<div class="col-md-4"></div>');
                let imagen = $('<img class="img-fluid rounded-start" src="' + entidades[i].imagen + '">');
                colomleft.append(imagen);

                let colomright = $('<div class="col-md-8"></div>');
                let cartaBody = $('<div class="card-body"></div>');
                let titulo = $('<h5 class="card-title">' + entidades[i].nombre + '</h5>');
                let detalles = $('<button class="btn btn-primary">Ver detalles</button>');
                var entidad=entidades[i];
                detalles.click(function () {
                    localStorage.setItem("entidadDetalles", JSON.stringify(entidad));
                    window.location.href = "detallesEntidad.html";
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
}
function mostrarDetalles() {
    mostrarProducto();
    mostrarPersonas();
    mostrarEntidades();
}
window.addEventListener("load", mostrarDetalles);