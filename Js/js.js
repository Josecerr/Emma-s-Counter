document.addEventListener("DOMContentLoaded", () => {
    let days = document.getElementById("days")

    let fechaComienzo = new Date("2024-04-17")
    let fechaHoy = new Date()

    let diferencia = fechaComienzo.getTime() - fechaHoy.getTime()
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    days.innerHTML = dias * -1

})

var cancionReproducida = false;

// Función para reproducir la canción cuando el usuario hace clic en algún lugar de la página
function reproducirCancion() {
  if (!cancionReproducida) {
    // Crear un elemento de audio
    var audio = new Audio('src/daviles.mp3');
    // Reproducir la canción en bucle
    audio.loop = true;
    audio.play();
    // Actualizar la variable de estado
    cancionReproducida = true;
  }
}

// Asociar la función a un evento de clic en cualquier parte de la página
document.addEventListener('click', function() {
  reproducirCancion();
});