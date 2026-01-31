# Imágenes de Guitarras

Esta carpeta contiene las imágenes locales para los productos de guitarra en la aplicación RiffMaster.

## Estructura de Carpetas

```
src/
└── assets/
    └── images/
        ├── guitarra electrica cafe.png
        ├── guitarra electrica negra.jpg
        ├── guitarra electroacustica clara.png
        └── README.md
```

## Cómo Agregar Imágenes

1. Coloque las imágenes de guitarra en formato JPG o PNG en esta carpeta
2. Asegúrese de que los nombres de archivo coincidan con los definidos en `src/utils/imagePaths.js`
3. Las imágenes deben tener dimensiones recomendadas de 800x800 píxeles para mejor calidad

## Imagen por Defecto

Si una imagen específica no está disponible, el sistema utilizará una imagen de respaldo genérica de guitarra.

## Actualizar Referencias

Las rutas de imagen están centralizadas en `src/utils/imagePaths.js`. Si cambia los nombres de archivo, actualice también este archivo.