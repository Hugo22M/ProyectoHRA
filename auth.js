function usuarioActual() {
    return localStorage.getItem("usuarioActivo");
}

function cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
    window.location.href = "index.html";
}

function cargarMenuUsuario() {
    var usuario = usuarioActual();
    var menuNoLogin = document.getElementById("menuNoLogin");
    var menuLogin = document.getElementById("menuLogin");
    var circuloUsuario = document.getElementById("circuloUsuario");

    if (!menuNoLogin || !menuLogin) {
        return;
    }

    if (usuario) {
        menuNoLogin.style.display = "none";
        menuLogin.style.display = "flex";
        circuloUsuario.textContent = usuario.charAt(0).toUpperCase();
    } else {
        menuNoLogin.style.display = "flex";
        menuLogin.style.display = "none";
    }
}

cargarMenuUsuario();
