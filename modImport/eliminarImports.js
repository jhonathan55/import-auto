const fs = require('fs').promises;
const path = require('path');

async function eliminarImports(directorioBase, directorioEliminado) {
  try {
    const archivos = await fs.readdir(directorioBase, { withFileTypes: true });

    for (const archivo of archivos) {
      const rutaCompleta = path.join(directorioBase, archivo.name);
      if (archivo.isDirectory()) {
        await eliminarImports(rutaCompleta, directorioEliminado);
      } else if (archivo.isFile() && path.extname(archivo.name) === '.ts') {
        const contenido = await fs.readFile(rutaCompleta, 'utf-8');
        const regex = new RegExp(`from ['"].*${directorioEliminado}.*['"];`, 'g');
        const nuevoContenido = contenido.replace(regex, '');

        if (contenido !== nuevoContenido) {
          await fs.writeFile(rutaCompleta, nuevoContenido, 'utf-8');
          console.log(`Imports eliminados de ${rutaCompleta}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error procesando el directorio ${directorioBase}:`, error);
  }
}

const directorioBase = path.join(__dirname, 'src'); // Ajusta según donde empieces el escaneo
const directorioEliminado = 'nombreDelDirectorioEliminado'; // Nombre del directorio eliminado
eliminarImports(directorioBase, directorioEliminado);
