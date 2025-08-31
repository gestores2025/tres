// Lista de canciones (debes asegurarte de que existan en la carpeta 'musica')
const canciones = [
    { nombre: "VIVO POR ELLA", archivo: "VIVO POR ELLA.mp3" },
    { nombre: "Titanic", archivo: "Titanic - My Heart Will Go On (Music Video)(MP3_128K).mp3" },
    { nombre: "ESPIRITU SANTO", archivo: "ESPIRITU SANTO.mp3" },

    { nombre: "EXAMEN AUDIO", archivo: "EXAMEN AUDIO.mp3" },
    { nombre: "cancion1", archivo: "cancion1.mp3" },
    { nombre: "Whitney Houston", archivo: "Whitney Houston - I Will Always Love You [Lyrics English - Español Subtitulado].mp3" },
     
    { nombre: "Tema 3", archivo: "cancion3.mp3" },

{ nombre: "UN ANGEL LLORA", archivo: "UN ANGEL LLORA.mp3" }
];

const lista = document.getElementById('listaCanciones');
const reproductor = document.getElementById('reproductor');

// Llenar el selector con las canciones
canciones.forEach((cancion, index) => {
    const opcion = document.createElement('option');
    opcion.value = cancion.archivo;
    opcion.textContent = cancion.nombre;
    lista.appendChild(opcion);
});

// Reproducir la canción seleccionada
lista.addEventListener('change', function () {
    const archivo = this.value;
    reproductor.src = `musica/${archivo}`;
    reproductor.play();
});

// Cargar la primera canción por defecto
if (canciones.length > 0) {
    lista.value = canciones[0].archivo;
    reproductor.src = `musica/${canciones[0].archivo}`;
}
