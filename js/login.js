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
  constructor(nombre, fechaCreacion, fechaDefuncion, imagen, wikipedia, personas) {
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.fechaDefuncion = fechaDefuncion;
    this.imagen = imagen;
    this.wikipedia = wikipedia;
    this.personas = [];
    for (var i = 0; i < personas.length; i++) {
      this.personas.push(personas[i]);
    }
  }
}

class Producto {
  constructor(nombre, fechaCreacion, fechaDefuncion, imagen, wikipedia, personas, entidades) {
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.fechaDefuncion = fechaDefuncion;
    this.imagen = imagen;
    this.wikipedia = wikipedia;
    this.personas = [];
    this.entidades = [];
    for (var i = 0; i < personas.length; i++) {
      this.personas.push(personas[i]);
    }
    for (var i = 0; i < entidades.length; i++) {
      this.entidades.push(entidades[i]);
    }
  }
}

function mostrarPersonas() {
  var personas = JSON.parse(localStorage.getItem("personas"));
  const divPrincipal = $('#Personas');
  for (var i = 0; i < personas.length; i++) {
    let cartaDiv = $('<div class="card my-3" style="width: 18rem;"></div>');
    var imagen = new Image();
    imagen.src = personas[i].imagen;
    imagen.className = "card-img-top";
    let cartaBody = $('<div class="card-body"></div>');
    let titulo = $('<h5 class="card-title">' + personas[i].nombre + '</h5>');
    let detalles = $('<button class="detalles btn btn-primary" value= ' + i + '>Detalles</button>');
    let editar = $('<button class="editar btn btn-primary me-1" style="display:none;" value= ' + i + '>Editar</button>');
    let borrar = $('<button class="borrar btn btn-danger" style="display:none;" value= ' + i + '>Borrar</button>');
    detalles.click(function () {
      var personas = JSON.parse(localStorage.getItem("personas"));
      var persona = personas[$(this).val()];
      localStorage.setItem("personaDetalles", JSON.stringify(persona));
      window.location.href = 'detallesPersona.html';
    });
    editar.click(function () {
      var personas = JSON.parse(localStorage.getItem("personas"));
      var persona = personas[$(this).val()];
      $('#fieldEditarNombrePersona').val(persona.nombre);
      $('#fieldEditarFechaNacimientoPersona').val(persona.fechaNacimiento);
      $('#fieldEditarFechaDefuncionPersona').val(persona.fechaDefuncion);
      $('#fieldEditarWikiPersona').val(persona.wikipedia);
      $('#saveEditarPersona').val($(this).val());
      $('#modalEditarPersona').modal('show');
    });
    borrar.click(function () {
      var personas = JSON.parse(localStorage.getItem("personas"));
      personas.splice($(this).val(), 1);
      localStorage.setItem("personas", JSON.stringify(personas));
      window.location.href = 'index.html';
    });

    cartaBody.append(titulo);
    cartaBody.append(detalles);
    cartaBody.append(editar);
    cartaBody.append(borrar);
    cartaDiv.append(imagen);
    cartaDiv.append(cartaBody);
    divPrincipal.append(cartaDiv);
  }
  let botonAgregar = $('<button class="agregar btn btn-success mt-3" style="display:none;">Añadir</button>');
  divPrincipal.append(botonAgregar);
  botonAgregar.click(function () {
    $('#modalAgregarPersona').modal('show');
  });
}

function mostrarEntidades() {
  var entidades = JSON.parse(localStorage.getItem("entidades"));
  const divPrincipal = $('#Entidades');
  for (var i = 0; i < entidades.length; i++) {
    let cartaDiv = $('<div class="card my-3" style="width: 18rem;"></div>');
    var imagen = new Image();
    imagen.src = entidades[i].imagen;
    imagen.className = "card-img-top";
    let cartaBody = $('<div class="card-body"></div>');
    let titulo = $('<h5 class="card-title">' + entidades[i].nombre + '</h5>');
    let detalles = $('<button class="detalles btn btn-primary" value= ' + i + '>Detalles</button>');
    let editar = $('<button class="editar btn btn-primary me-1" style="display:none;" >Editar</button>');
    let borrar = $('<button class="borrar btn btn-danger" style="display:none;" value= ' + i + '>Borrar</button>');
    detalles.click(function () {
      var entidades = JSON.parse(localStorage.getItem("entidades"));
      var entidad = entidades[$(this).val()];
      localStorage.setItem("entidadDetalles", JSON.stringify(entidad));
      window.location.href = 'detallesEntidad.html';
    });
    borrar.click(function () {
      var entidades = JSON.parse(localStorage.getItem("entidades"));
      entidades.splice($(this).val(), 1);
      localStorage.setItem("entidades", JSON.stringify(entidades));
      window.location.href = 'index.html';
    });
    cartaBody.append(titulo);
    cartaBody.append(detalles);
    cartaBody.append(editar);
    cartaBody.append(borrar);
    cartaDiv.append(imagen);
    cartaDiv.append(cartaBody);
    divPrincipal.append(cartaDiv);
  }
  let botonAgregar = $('<button class="agregar btn btn-success mt-3" style="display:none;">Añadir</button>');
  divPrincipal.append(botonAgregar);
  botonAgregar.click(function () {
    $('#modalAgregarEntidad').modal('show');
  });
}

function mostrarProductos() {
  var productos = JSON.parse(localStorage.getItem("productos"));
  const divPrincipal = $('#Productos');
  for (var i = 0; i < productos.length; i++) {
    let cartaDiv = $('<div class="card my-3" style="width: 18rem;"></div>');
    var imagen = new Image();
    imagen.src = productos[i].imagen;
    imagen.className = "card-img-top";
    let cartaBody = $('<div class="card-body"></div>');
    let titulo = $('<h5 class="card-title">' + productos[i].nombre + '</h5>');
    let detalles = $('<button class="detalles btn btn-primary" value= ' + i + '>Detalles</button>');
    let editar = $('<button class="editar btn btn-primary me-1" style="display:none;" >Editar</button>');
    let borrar = $('<button class="borrar btn btn-danger" style="display:none;" value= ' + i + '>Borrar</button>');
    detalles.click(function () {
      var productos = JSON.parse(localStorage.getItem("productos"));
      var producto = productos[$(this).val()];
      localStorage.setItem("productoDetalles", JSON.stringify(producto));
      window.location.href = 'detallesProducto.html';
    });
    borrar.click(function () {
      var productos = JSON.parse(localStorage.getItem("productos"));
      productos.splice($(this).val(), 1);
      localStorage.setItem("productos", JSON.stringify(productos));
      window.location.href = 'index.html';
    });
    cartaBody.append(titulo);
    cartaBody.append(detalles);
    cartaBody.append(editar);
    cartaBody.append(borrar);
    cartaDiv.append(imagen);
    cartaDiv.append(cartaBody);
    divPrincipal.append(cartaDiv);
  }
  let botonAgregar = $('<button class="agregar btn btn-success mt-3" style="display:none;">Añadir</button>');
  divPrincipal.append(botonAgregar);
  botonAgregar.click(function () {
    $('#modalAgregarProducto').modal('show');
  });
}

function login() {
  $(".detalles").hide();
  $(".editar").show();
  $(".borrar").show();
  $(".agregar").show();
  $('#login-form').hide();
  $('#logout-form').show();
}

function logout() {
  $('#logout-form').hide();
  $('#login-form').show();
  $(".editar").hide();
  $(".borrar").hide();
  $(".agregar").hide();
  $(".detalles").show();
}

function init() {
  // Comprobar si esta logueado
  var session = localStorage.getItem("session");
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
    var persona = new Persona('Tim Berners-Lee', '1955-06-08', '', '/Resources/Sir_Tim_Berners-Lee.jpg', 'https://es.wikipedia.org/wiki/Tim_Berners-Lee');
    var personasArray = [];
    personasArray.push(persona);
    var personasJSON = JSON.stringify(personasArray);
    localStorage.setItem("personas", personasJSON);

    // Creo una entidad por defecto
    var personas = [];
    personas.push(persona.nombre);
    var entidad = new Entidad("World Wide Web Consortium", "1994", "Actualidad", "/Resources/w3c.png", "https://es.wikipedia.org/wiki/World_Wide_Web_Consortium", personas);
    var entidadesArray = [];
    entidadesArray.push(entidad);
    var entidadesJSON = JSON.stringify(entidadesArray);
    localStorage.setItem("entidades", entidadesJSON);

    // Creo un producto por defecto
    var entidades = [];
    entidades.push(entidad.nombre);
    var producto = new Producto("HTML", "1991", "Actualidad", "/Resources/html.png", "https://es.wikipedia.org/wiki/HTML", personas, entidades);
    var productosArray = [];
    productosArray.push(producto);
    var productosJSON = JSON.stringify(productosArray);
    localStorage.setItem("productos", productosJSON);
  }
  mostrarPersonas();
  mostrarEntidades();
  mostrarProductos();
  if (session === null) {
    localStorage.setItem("session", "false");
  } else {
    if (session === "true") {
      login();
    } else {
      logout();
    }
  }
}
window.addEventListener("load", init);

function addPersona() {
  const nombre = $('#fieldNombrePersona').val();
  const fechaNacimiento = $('#fieldFechaNacimientoPersona').val();
  const fechaMuerte = $('#fieldFechaDefuncionPersona').val();
  const wikipedia = $('#fieldWikiPersona').val();
  var imagen = $('#fieldImagenPersona').val();
  if (nombre != "" && fechaNacimiento != "" && wikipedia != "" && imagen != "") {
    if (fechaMuerte == "") {
      fechaMuerte = "Actualidad";
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      imagen = e.target.result;
      var persona = new Persona(nombre, fechaNacimiento, fechaMuerte, imagen, wikipedia);
      var personas = JSON.parse(localStorage.getItem("personas"));
      personas.push(persona);
      var personasJSON = JSON.stringify(personas);
      localStorage.setItem("personas", personasJSON);
      window.location.href = 'index.html';
    }
    reader.readAsDataURL($('#fieldImagenPersona')[0].files[0]);
  }
}

function addEntidad() {
  const nombre = $('#fieldNombreEntidad').val();
  const fechaCreacion = $('#fieldFechaCreacionEntidad').val();
  const fechaDesaparicion = $('#fieldFechaDesaparicionEntidad').val();
  const wikipedia = $('#fieldWikiEntidad').val();
  var personas = $('#fieldPersonasEntidad').val();
  personas = personas.split(",");
  var imagen = $('#fieldImagenEntidad').val();
  if (nombre != "" && fechaCreacion != "" && wikipedia != "" && imagen != "") {
    if (fechaDesaparicion == "") {
      fechaDesaparicion = "Actualidad";
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      imagen = e.target.result;
      var entidad = new Entidad(nombre, fechaCreacion, fechaDesaparicion, imagen, wikipedia, personas);
      var entidades = JSON.parse(localStorage.getItem("entidades"));
      entidades.push(entidad);
      var entidadesJSON = JSON.stringify(entidades);
      localStorage.setItem("entidades", entidadesJSON);
      window.location.href = 'index.html';
    }
    reader.readAsDataURL($('#fieldImagenEntidad')[0].files[0]);
  }
}

function addProducto() {
  const nombre = $('#fieldNombreProducto').val();
  const fechaCreacion = $('#fieldFechaCreacionProducto').val();
  const fechaDesaparicion = $('#fieldFechaDesaparicionProducto').val();
  const wikipedia = $('#fieldWikiProducto').val();
  var personas = $('#fieldPersonasProducto').val();
  personas = personas.split(",");
  var entidades = $('#fieldEntidadesProducto').val();
  entidades = entidades.split(",");
  var imagen = $('#fieldImagenProducto').val();
  if (nombre != "" && fechaCreacion != "" && wikipedia != "" && imagen != "") {
    if (fechaDesaparicion == "") {
      fechaDesaparicion = "Actualidad";
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      imagen = e.target.result;
      var producto = new Producto(nombre, fechaCreacion, fechaDesaparicion, imagen, wikipedia, personas, entidades);
      var productos = JSON.parse(localStorage.getItem("productos"));
      productos.push(producto);
      var productosJSON = JSON.stringify(productos);
      localStorage.setItem("productos", productosJSON);
      window.location.href = 'index.html';
    }
    reader.readAsDataURL($('#fieldImagenProducto')[0].files[0]);
  }
}


$(document).ready(function () {
  var alert = document.getElementById("alerta");

  //Funcionalidad del botón de login
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
        $(".agregar").show();
        $('#login-form').hide();
        $('#logout-form').show();
        localStorage.setItem("session", "true");
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

  //Funcionalidad del botón de logout
  $('#logout-button').click(function () {
    // Aquí va la lógica de la función de logout
    $('#logout-form').hide();
    $('#login-form').show();
    $(".editar").hide();
    $(".borrar").hide();
    $(".agregar").hide();
    $(".detalles").show();
    localStorage.setItem("session", "false");
  });

  //Funcionalidad del botón de editarPersona
  $('#saveEditarPersona').click(function () {
    const nombre = $('#fieldEditarNombrePersona').val();
    const fechaNacimiento = $('#fieldEditarFechaNacimientoPersona').val();
    var fechaMuerte = $('#fieldEditarFechaDefuncionPersona').val();
    const wikipedia = $('#fieldEditarWikiPersona').val();
    var imagen = $('#fieldEditarImagenPersona').val();
    var indice = $(this).val();
    if (nombre != "" && fechaNacimiento != "" && wikipedia != "") {
      if (fechaMuerte == "") {
        fechaMuerte = "Actualidad";
      }
      if(imagen != ""){
        var reader = new FileReader();
        reader.onload = function (e) {
          imagen = e.target.result;
          var personas = JSON.parse(localStorage.getItem("personas"));
          const persona = new Persona(nombre, fechaNacimiento, fechaMuerte, imagen, wikipedia);
          personas.splice(indice, 1);
          personas.splice(indice, 0, persona);
          var personasJSON = JSON.stringify(personas);
          localStorage.setItem("personas", personasJSON);
         window.location.href = 'index.html';
        }
        reader.readAsDataURL($('#fieldEditarImagenPersona')[0].files[0]);
      }else{
        var personas = JSON.parse(localStorage.getItem("personas"));
        const persona = new Persona(nombre, fechaNacimiento, fechaMuerte, personas[indice].imagen, wikipedia);
        personas.splice(indice, 1);
        personas.splice(indice, 0, persona);
        var personasJSON = JSON.stringify(personas);
        localStorage.setItem("personas", personasJSON);
        window.location.href = 'index.html';
      }
      
    }
  });
});