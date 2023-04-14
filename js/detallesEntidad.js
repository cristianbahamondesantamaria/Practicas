function convertirFecha(fecha) {
    var fecha = new Date(fecha);
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var dicmeses = {
        1: "Enero",
        2: "Febrero",
        3: "Marzo",
        4: "Abril",
        5: "Mayo",
        6: "Junio",
        7: "Julio",
        8: "Agosto",
        9: "Septiembre",
        10: "Octubre",
        11: "Noviembre",
        12: "Diciembre"
    };
    var anio = fecha.getFullYear();
    return dia + " de " + dicmeses[mes] + " de " + anio;
}

function mostrarEntidad(){
    const detalles = JSON.parse(localStorage.getItem("entidadDetalles"));
    const divPrincipal = $('#Detalles');

    let colomleft = $('<div class="col-md-4"></div>');
    let imagen = $('<img class="img-fluid rounded-start" src="' + detalles.imagen + '">');
    colomleft.append(imagen);
    let colomright = $('<div class="col-md-8"></div>');
    let cardBody = $('<div class="card-body"></div>');
    let titulo = $('<h5 class="card-title">' + detalles.nombre + '</h5>');
    var muerte = "" === detalles.fechaDefuncion ? "" : "y se disolvió el " + convertirFecha(detalles.fechaDefuncion);
    let descripcion = $('<p class="card-text">Se fundo el '
        + convertirFecha(detalles.fechaCreacion) + ' '
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

function mostrarPersonas() {
    const detalles = JSON.parse(localStorage.getItem("entidadDetalles"));
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

function mostrarProductos() {
    const detalles = JSON.parse(localStorage.getItem("entidadDetalles"));
    const productos = JSON.parse(localStorage.getItem("productos"));
    const divPrincipal = $('#Productos');
    for (var i = 0; i < productos.length; i++) {
        var entidadessize=productos[i].entidades.length;
        for(var j=0; j<entidadessize; j++){
            if (productos[i].entidades[j] === detalles.nombre) {
                let cartaDiv = $('<div class="card d-flex align-items-center justify-content-center m-5 " style="max-width: 540px;"></div>');
                let row = $('<div class="row g-0"></div>');
    
                let colomleft = $('<div class="col-md-4"></div>');
                let imagen = $('<img class="img-fluid rounded-start" src="' + productos[i].imagen + '">');
                colomleft.append(imagen);
    
                let colomright = $('<div class="col-md-8"></div>');
                let cartaBody = $('<div class="card-body"></div>');
                let titulo = $('<h5 class="card-title">' + productos[i].nombre + '</h5>');
                let detalles = $('<button class="btn btn-primary">Ver detalles</button>');
                var producto=productos[i];
                detalles.click(function () {
                    localStorage.setItem("productoDetalles", JSON.stringify(producto));
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
}

function mostrarDetalles() {
    mostrarEntidad();
    mostrarPersonas();
    mostrarProductos();
}
window.addEventListener("load", mostrarDetalles);