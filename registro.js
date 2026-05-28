var formRegistro = document.getElementById("formRegistro");

formRegistro.addEventListener("submit", function(evento) {
    evento.preventDefault();

    var usuario = document.getElementById("nuevoUsuario").value.trim();
    var password = document.getElementById("nuevaPassword").value.trim();

    if (usuario === "" || password === "") {
        alert("Rellena todos los campos");
        return;
    }

    localStorage.setItem("usuarioRegistrado", usuario);
    localStorage.setItem("passwordRegistrada", password);

    alert("Cuenta creada correctamente");
    window.location.href = "login.html";
});
