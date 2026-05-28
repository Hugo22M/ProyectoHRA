var formLogin = document.getElementById("formLogin");

if (formLogin) {
    formLogin.addEventListener("submit", function(evento) {
        evento.preventDefault();

        var usuario = document.getElementById("usuarioLogin").value.trim();
        var password = document.getElementById("passwordLogin").value.trim();

        var usuarioGuardado = localStorage.getItem("usuarioRegistrado");
        var passwordGuardada = localStorage.getItem("passwordRegistrada");

        if (usuario === usuarioGuardado && password === passwordGuardada) {
            localStorage.setItem("usuario", usuario);
            window.location.href = "index.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
}

var usuarioActual = localStorage.getItem("usuario");

if (usuarioActual) {
    var menuNoLogin = document.getElementById("menuNoLogin");
    var menuLogin = document.getElementById("menuLogin");
    var circuloUsuario = document.getElementById("circuloUsuario");

    if (menuNoLogin && menuLogin && circuloUsuario) {
        menuNoLogin.style.display = "none";
        menuLogin.style.display = "flex";
        circuloUsuario.innerText = usuarioActual.charAt(0).toUpperCase();
    }
}

function cerrarSesion() {
    localStorage.removeItem("usuario");
    window.location.href = "index.html";
}