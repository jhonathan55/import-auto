const fs = require('fs').promises;
const path = require('path');

async function eliminarDirectorio(directorio) {
  try {
    await fs.rmdir(directorio, { recursive: true });
    console.log(`Directorio ${directorio} eliminado`);
  } catch (error) {
    console.error(`Error eliminando el directorio ${directorio}:`, error);
  }
}

const directorioNest = path.join(__dirname, 'ruta/del/directorio'); // ajusta la ruta según sea necesario
eliminarDirectorio(directorioNest);
