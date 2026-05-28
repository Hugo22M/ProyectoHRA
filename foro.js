const formForo = document.getElementById("formForo");
const mensajeForo = document.getElementById("mensajeForo");
const mensajesForo = document.getElementById("mensajesForo");
const avisoLogin = document.getElementById("avisoLogin");
const zonaPublicar = document.getElementById("zonaPublicar");

var usuarioActual = localStorage.getItem("usuario");

if (!usuarioActual) {
    zonaPublicar.style.display = "none";
    avisoLogin.style.display = "block";
} else {
    zonaPublicar.style.display = "block";
    avisoLogin.style.display = "none";
}

async function cargarMensajes() {

    mensajesForo.innerHTML = "<p>Cargando mensajes...</p>";

    const { data, error } = await supabaseClient
        .from("mensajes_foro")
        .select("*")
        .order("fecha", { ascending: false });

    if (error) {
        console.log(error);
        mensajesForo.innerHTML = "<p>Error al cargar mensajes.</p>";
        return;
    }

    if (data.length === 0) {
        mensajesForo.innerHTML = "<p>Todavía no hay mensajes en el foro.</p>";
        return;
    }

    mensajesForo.innerHTML = "";

    data.forEach(function (mensaje) {

        const caja = document.createElement("div");

        caja.className = "foro-mensaje";

        const fecha = new Date(mensaje.fecha).toLocaleString("es-ES");

        caja.innerHTML = `
            <strong>${mensaje.usuario}</strong>
            <span class="foro-fecha">${fecha}</span>
            <p>${mensaje.mensaje}</p>

            <button onclick="borrarMensaje(${mensaje.id})" class="btn-borrar">
                Borrar
            </button>
        `;

        mensajesForo.appendChild(caja);
    });
}

if (formForo) {

    formForo.addEventListener("submit", async function (e) {

        e.preventDefault();

        const texto = mensajeForo.value.trim();

        if (texto === "") {
            alert("Escribe un mensaje antes de publicar.");
            return;
        }

        const { error } = await supabaseClient
            .from("mensajes_foro")
            .insert([
                {
                    usuario: usuarioActual,
                    mensaje: texto
                }
            ]);

        if (error) {
            console.log(error);
            alert(error.message);
            return;
        }

        mensajeForo.value = "";

        cargarMensajes();
    });
}

async function borrarMensaje(id) {

    var confirmar = confirm("¿Quieres borrar este mensaje?");

    if (!confirmar) {
        return;
    }

    const { error } = await supabaseClient
        .from("mensajes_foro")
        .delete()
        .eq("id", id);

    if (error) {
        console.log(error);
        alert("Error al borrar mensaje");
        return;
    }

    cargarMensajes();
}

cargarMensajes();
