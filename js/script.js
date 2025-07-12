let intervalo; // Controla el setInterval

// Funcion para comparar la hora
function compararHora(){
    const zonaSeleccionada = document.getElementById('timezone').value;

    const opciones = {
        hour: '2-digit', // Tendra y se mostrara solo 2 digitos
        minute: '2-digit',
        second: '2-digit',
        hour12: true // Se obliga que tenga formato de 12 horas
    };

    // Hora en el salvador, esta en en-us por mi el idioma de mi pc
    const horaSV = new Date().toLocaleTimeString('en-US', opciones);

    // Hora en la zona seleccionada
    const horaOtro = new Date().toLocaleTimeString('en-US', {
        ...opciones,
        timeZone: zonaSeleccionada
    });
    
    // Formatear nombre legible de zona
    const nombreZona = zonaSeleccionada
        .split('/')
        .pop()
        .replace(/_/g, ' ');

    // Mostrar en pantalla
    document.getElementById('resultado').innerHTML = `
        <div>
            <strong>Hora en El Salvador:</strong> ${horaSV}<br>
            <strong>Hora en ${nombreZona}:</strong> ${horaOtro}
        </div>
    `;
}

function iniciarComparacion(){
    clearInterval(intervalo); // Se evita los intervalos multiples
    compararHora(); // Mostrar de inmediato
    intervalo = setInterval(compararHora, 1000); // Se actualiza cada segundo
}