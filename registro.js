var formRegistro = document.getElementById("formRegistro");

if (formRegistro) {
    formRegistro.addEventListener("submit", function(evento) {
        evento.preventDefault();

        var usuario = document.getElementById("usuarioRegistro").value.trim();
        var password = document.getElementById("passwordRegistro").value.trim();

        if (usuario === "" || password === "") {
            alert("Rellena todos los campos");
            return;
        }

        localStorage.setItem("usuarioRegistrado", usuario);
        localStorage.setItem("passwordRegistrada", password);

        alert("Cuenta creada correctamente");

        window.location.href = "login.html";
    });
}
