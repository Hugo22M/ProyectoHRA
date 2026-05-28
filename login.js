var formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(evento) {
    evento.preventDefault();

    var usuario = document.getElementById("usuarioLogin").value.trim();
    var password = document.getElementById("passwordLogin").value.trim();

    var usuarioGuardado = localStorage.getItem("usuarioRegistrado");
    var passwordGuardada = localStorage.getItem("passwordRegistrada");

    if (usuario === usuarioGuardado && password === passwordGuardada) {
        localStorage.setItem("usuarioActivo", usuario);
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
