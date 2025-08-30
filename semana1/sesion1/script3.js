function mostrarFormulario() { //formunlario general o-o
    document.body.innerHTML = `
        <h1>Formulario de Contacto</h1>
        <form id="formulario">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
            <br>
            <label for="fecha">Fecha de nacimiento:</label>
            <input type="date" id="fecha" name="fecha" required>
            <br>
            <label for="dni">DNI:</label>
            <input type="text" id="dni" name="dni" required>
            <br>
            <label for="telefono">Teléfono:</label>
            <input type="text" id="telefono" name="telefono" required>
            <br><br>
            <input type="button" value="Generar Contraseña" onclick="mostrarContrasena()">
        </form>
    `;
}

function generarContrasena() { //genera la contraseña, con los datos del formulario
    let year = new Date().getFullYear();
    let year_text = year.toString();
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let dni = document.getElementById("dni").value;
    let telefono = document.getElementById("telefono").value;

    let contrasena =
        year_text.slice(2) +
        nombre.slice(0, 3) +
        dni.slice(-3) + "#"+
        telefono.slice(-3);

    return contrasena;
}

function mostrarContrasena() {
    let contrasena = generarContrasena();
    document.body.innerHTML = `
        <h2>Contraseña Generada:</h2>
        <p>${contrasena}</p>
        <button onclick="mostrarFormulario()">Volver al Formulario</button>
    `;
}

mostrarFormulario();
