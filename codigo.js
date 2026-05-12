function enviarTurno() {
    // 1. Capturamos los datos que el usuario escribió
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const dni = document.getElementById('dni').value;
    const servicio = document.getElementById('serv').value;
    const profesional = document.getElementById('prof').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // 2. Validación: Si falta algo importante, avisamos
    if (nombre === "" || apellido === "" || fecha === "") {
        alert("⚠️ Por favor, completa Nombre, Apellido y Fecha.");
        return;
    }

    // 3. Formateamos la fecha para que se vea bien (Día/Mes/Año)
    const fechaFormateada = fecha.split("-").reverse().join("/");

    // 4. Creamos el resumen dinámico
    const resumenHTML = `
        <p><strong>Paciente:</strong> ${nombre} ${apellido}</p>
        <p><strong>DNI:</strong> ${dni}</p>
        <p><strong>Cita:</strong> ${fechaFormateada} a las ${hora} hs</p>
        <p><strong>Servicio:</strong> ${servicio}</p>
        <p><strong>Atendido por:</strong> ${profesional}</p>
        <p><strong>Lugar:</strong> La Rioja 75, Neuquén Capital</p>
    `;

    // 5. Ocultamos el formulario y mostramos el resumen
    const cajaForm = document.getElementById('caja-formulario');
    const cajaConfirm = document.getElementById('confirmacion');
    const displayResumen = document.getElementById('datos-resumen');

    if (cajaForm && cajaConfirm) {
        cajaForm.style.display = 'none';
        displayResumen.innerHTML = resumenHTML;
        cajaConfirm.style.display = 'block';
        
        // Volver arriba para ver el mensaje de éxito
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Log para verificar en consola que el JS cargó bien
console.log("Sistema de interactividad cargado correctamente.");