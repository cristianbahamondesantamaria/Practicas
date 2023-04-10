class Persona {
  constructor(nombre, fechaNacimiento, fechaDefuncion, imagen, wikipedia) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.fechaDefuncion = fechaDefuncion;
    this.imagen = imagen;
    this.wikipedia = wikipedia;
  }
}

class Entidad {
  constructor(nombre, fechaCreacion, fechaDefuncion, imagen, wikipedia, persona) {
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.fechaDefuncion = fechaDefuncion;
    this.imagen = imagen;
    this.wikipedia = wikipedia;
    this.personas = [];
    this.personas.push(persona);
  }
}

class Producto {
  constructor(nombre, fechaCreacion, fechaDefuncion, imagen, wikipedia, persona, entidad) {
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.fechaDefuncion = fechaDefuncion;
    this.imagen = imagen;
    this.wikipedia = wikipedia;
    this.personas = [];
    this.entidades = [];
    this.personas.push(persona);
    this.entidades.push(entidad);
  }
}
function mostrarPersonas() {
  var personas = JSON.parse(localStorage.getItem("personas"));
  const divPrincipal = $('#Personas');
  for (var i = 0; i < personas.length; i++) {
    let cartaDiv = $('<div class="card" style="width: 18rem;"></div>');
    let imagen = $('<img class="card-img-top" src="' + personas[i].imagen + '">');
    let cartaBody = $('<div class="card-body"></div>');
    let titulo = $('<h5 class="card-title">' + personas[i].nombre + '</h5>');
    let detalles = $('<button class="detalles btn btn-primary">Detalles</button>');
    let editar = $('<button class="editar btn btn-primary me-1" style="display:none;" >Editar</button>');
    let borrar = $('<button class="borrar btn btn-danger" style="display:none;" >Borrar</button>');
    var persona = personas[i];
    detalles.click(function () {
      localStorage.setItem("personaDetalles", JSON.stringify(persona));
      window.location.href = 'detallesPersona.html';
    });
    cartaBody.append(titulo);
    cartaBody.append(detalles);
    cartaBody.append(editar);
    cartaBody.append(borrar);
    cartaDiv.append(imagen);
    cartaDiv.append(cartaBody);
    divPrincipal.append(cartaDiv);
  }
  let botonAgregar = $('<button class="agregar btn btn-success mt-3">Añadir</button>');
  divPrincipal.append(botonAgregar);
  botonAgregar.click(function () {
    $('#modalAgregarPersona').modal('show');
  });
}

function mostrarEntidades() {
  var entidades = JSON.parse(localStorage.getItem("entidades"));
  const divPrincipal = $('#Entidades');
  for (var i = 0; i < entidades.length; i++) {
    let cartaDiv = $('<div class="card" style="width: 18rem;"></div>');
    let imagen = $('<img class="card-img-top" src="' + entidades[i].imagen + '">');
    let cartaBody = $('<div class="card-body"></div>');
    let titulo = $('<h5 class="card-title">' + entidades[i].nombre + '</h5>');
    let detalles = $('<button class="detalles btn btn-primary">Detalles</button>');
    let editar = $('<button class="editar btn btn-primary me-1" style="display:none;" >Editar</button>');
    let borrar = $('<button class="borrar btn btn-danger" style="display:none;" >Borrar</button>');
    var entidad = entidades[i];
    detalles.click(function () {
      localStorage.setItem("entidadDetalles", JSON.stringify(entidad));
      window.location.href = 'detallesEntidad.html';
    });
    cartaBody.append(titulo);
    cartaBody.append(detalles);
    cartaBody.append(editar);
    cartaBody.append(borrar);
    cartaDiv.append(imagen);
    cartaDiv.append(cartaBody);
    divPrincipal.append(cartaDiv);
  }
}

function mostrarProductos() {
  var productos = JSON.parse(localStorage.getItem("productos"));
  const divPrincipal = $('#Productos');
  for (var i = 0; i < productos.length; i++) {
    let cartaDiv = $('<div class="card" style="width: 18rem;"></div>');
    let imagen = $('<img class="card-img-top" src="' + productos[i].imagen + '">');
    let cartaBody = $('<div class="card-body"></div>');
    let titulo = $('<h5 class="card-title">' + productos[i].nombre + '</h5>');
    let detalles = $('<button class="detalles btn btn-primary">Detalles</button>');
    let editar = $('<button class="editar btn btn-primary me-1" style="display:none;" >Editar</button>');
    let borrar = $('<button class="borrar btn btn-danger" style="display:none;" >Borrar</button>');
    var producto = productos[i];
    detalles.click(function () {
      localStorage.setItem("productoDetalles", JSON.stringify(producto));
      window.location.href = 'detallesProducto.html';
    });
    cartaBody.append(titulo);
    cartaBody.append(detalles);
    cartaBody.append(editar);
    cartaBody.append(borrar);
    cartaDiv.append(imagen);
    cartaDiv.append(cartaBody);
    divPrincipal.append(cartaDiv);
  }
}

function init() {
  var users = localStorage.getItem("users");
  var personas = localStorage.getItem("personas");
  var entidades = localStorage.getItem("entidades");
  var productos = localStorage.getItem("productos");
  // La lista de usuarios, personas, entidades o productos no existe, crearla
  if (users === null && personas === null && entidades === null && productos === null) {
    var usersArray = [
      { username: "x", password: "x" },
      { username: "y", password: "y" },
      { username: "z", password: "z" }
    ];
    var usersJSON = JSON.stringify(usersArray);
    localStorage.setItem("users", usersJSON);

    // Creo una persona por defecto
    var persona = new Persona('Tim Berners-Lee', '8 de junio de 1955', 'Actualidad', '/Resources/Sir_Tim_Berners-Lee.jpg', 'https://es.wikipedia.org/wiki/Tim_Berners-Lee');
    var personasArray = [];
    personasArray.push(persona);
    var personasJSON = JSON.stringify(personasArray);
    localStorage.setItem("personas", personasJSON);

    // Creo una entidad por defecto
    var entidad = new Entidad("World Wide Web Consortium", "1994", "Actualidad", "/Resources/w3c.png", "https://es.wikipedia.org/wiki/World_Wide_Web_Consortium", persona.nombre);
    var entidadesArray = [];
    entidadesArray.push(entidad);
    var entidadesJSON = JSON.stringify(entidadesArray);
    localStorage.setItem("entidades", entidadesJSON);

    // Creo un producto por defecto
    var producto = new Producto("HTML", "1991", "Actualidad", "/Resources/html.png", "https://es.wikipedia.org/wiki/HTML", persona.nombre, entidad.nombre);
    var productosArray = [];
    productosArray.push(producto);
    var productosJSON = JSON.stringify(productosArray);
    localStorage.setItem("productos", productosJSON);
  }
  mostrarPersonas();
  mostrarEntidades();
  mostrarProductos();
}
window.addEventListener("load", init);

function addPersona() {
  const nombre = $('#fieldNombrePersona').val();
  const fechaNacimiento = $('#fieldFechaNacimientoPersona').val();
  const fechaMuerte = $('#fieldFechaDefuncionPersona').val();
  const wikipedia = $('#fieldWikiPersona').val();
  const imagen = $('#fieldImagenPersona').val();


}


$(document).ready(function () {
  var alert = document.getElementById("alerta");
  $('#login-button').click(function () {
    var username = document.getElementById("fieldUser").value;
    var password = document.getElementById("fieldPassword").value;
    var users = JSON.parse(localStorage.getItem("users"));
    // Recorrer lista de usuarios y contraseñas
    for (var i = 0; i < users.length; i++) {
      if (username === users[i].username && password === users[i].password) {
        // Iniciar sesión
        alert.className = "alert alert-success";
        alert.textContent = "Inicio de sesión exitoso";
        var container = document.getElementById("zonaAlerta");
        container.appendChild(alert);
        $(".detalles").hide();
        $(".editar").show();
        $(".borrar").show();
        $('#login-form').hide();
        $('#logout-form').show();
        setTimeout(function () {
          container.removeChild(alert);
        }, 3000);
        return;
      }
    }
    // No se encontró el usuario
    alert.className = "alert alert-danger";
    alert.textContent = "Usuario o contraseña incorrectos";
    var container = document.getElementById("zonaAlerta");
    container.appendChild(alert);
  });

  $('#logout-button').click(function () {
    // Aquí va la lógica de la función de logout
    $('#logout-form').hide();
    $('#login-form').show();
    $(".editar").hide();
    $(".borrar").hide();
    $(".detalles").show();
  });
});