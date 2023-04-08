function init() {
  var users = localStorage.getItem("users");

  if (users === null) {
    // La lista de usuarios no existe, crearla
    var usersArray = [
      { username: "x", password: "x" },
      { username: "y", password: "y" },
      { username: "z", password: "z" }
    ];
    var usersJSON = JSON.stringify(usersArray);
    localStorage.setItem("users", usersJSON);
  }
}
window.addEventListener("load", init);

function login() {
  var alert = document.getElementById("alerta");
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
      setTimeout(function () {
        window.location.href = "index.html";
      }, 3000);
      return;
    }
  }
  // Si no se encuentra el usuario
  alert.className = "alert alert-danger";
  alert.textContent = "Usuario o contraseña incorrectos";
  var container = document.getElementById("zonaAlerta");
  container.appendChild(alert);
}