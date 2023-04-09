function init() {
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
  });
});