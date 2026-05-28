var usuario = localStorage.getItem("usuarioActivo");

if (!usuario) {
    window.location.href = "login.html";
} else {
    document.getElementById("textoCuenta").textContent = "Has iniciado sesión como: " + usuario;
}
