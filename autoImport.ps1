
if (Test-Path ".\modImport\autoImport.js") {
    # Ejecuta el archivo si existe
    node .\autoImport.js $pkg
    Write-Host "existe script ..."
} else {
    # Imprime un mensaje de error si no existe
    Write-Host "Error: autoImport.js no se encuentra en la ubicación esperada."
}
# Establecer la ubicación del directorio

# Imprimir que el script ha empezado
Write-Host "Iniciando el script..."

# Obtener todos los paquetes instalados
$packages = npm list --depth=0 | ForEach-Object {
    if ($_ -match '(?<=\s)[\w\-]+(?=@)') {
        $matches[0]
    }
} | Select-Object -Skip 1

# Imprimir los paquetes encontrados
Write-Host "Paquetes encontrados: $($packages -join ', ')"

# Filtrar y pasar al script
foreach ($pkg in $packages) {
    # Imprimir qué paquete está siendo procesado
    Write-Host "Procesando paquete: $pkg..."

    # Aquí puedes añadir lógica adicional para filtrar paquetes
    node autoImport.js $pkg

    # Imprimir que el paquete ha sido procesado
    Write-Host "Paquete $pkg procesado."
}

# Imprimir que el script ha terminado
Write-Host "Script finalizado."
