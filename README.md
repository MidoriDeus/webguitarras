# RiffMaster - Tienda de Guitarras

RiffMaster es una aplicación web de comercio electrónico moderna y receptiva construida con React y Vite, especializada en guitarras eléctricas premium. La aplicación presenta una interfaz elegante con tema oscuro y opción de tema claro, mostrando una colección cuidadosamente seleccionada de guitarras de alta gama con funcionalidad completa de carrito de compras.

## Características

- **Diseño Receptivo**: Diseño completamente receptivo que funciona en todos los tamaños de dispositivo
- **Tema Oscuro/Claro**: Alternar entre temas oscuros y claros según la preferencia del usuario
- **Mostrador de Productos**: Visualización de guitarras eléctricas premium con imágenes, nombres y precios
- **Carrito de Compras**: Sistema de carrito interactivo que permite agregar/eliminar artículos
- **Interfaz Moderna**: Efectos de glass-morphism, animaciones suaves y acentos degradados
- **Navegación Suave**: Navegación con desplazamiento suave entre secciones
- **Elementos Animados**: Animaciones de aparición para secciones de contenido

## Tecnologías Utilizadas

- **React**: Biblioteca frontend para construir interfaces de usuario
- **Vite**: Herramienta de construcción frontend de próxima generación
- **CSS3**: Estilo moderno con variables y animaciones CSS
- **ESLint**: Revisión de código y aseguramiento de calidad

## Estructura de la Aplicación

La aplicación consta de varios componentes clave:

- **Encabezado**: Barra de navegación fija con logo, enlaces de menú e icono del carrito
- **Sección Principal**: Sección de aterrizaje llamativa con llamada a la acción
- **Cuadrícula de Productos**: Cuadrícula receptiva que muestra productos de guitarras
- **Tarjetas de Guitarra**: Tarjetas de producto individuales con imágenes, precios y botones de añadir al carrito
- **Sección Acerca de**: Información sobre la empresa
- **Pie de Página**: Información de derechos de autor y atribución
- **Panel del Carrito**: Panel deslizante que muestra el contenido del carrito con funcionalidad de eliminación

## Componentes

### Componentes Principales
- `App.jsx`: Componente principal de la aplicación que gestiona estado y enrutamiento
- `Header.jsx`: Encabezado de navegación con indicador de cambio de tema y carrito
- `Hero.jsx`: Sección principal de la página de inicio
- `ProductGrid.jsx`: Diseño de cuadrícula para mostrar productos de guitarras
- `GuitarCard.jsx`: Componente individual de tarjeta de producto
- `Footer.jsx`: Pie de página
- `About.jsx`: Sección de información de la empresa
- `CartDrawer.jsx`: Panel lateral del carrito de compras
- `FadeInSection.jsx`: Componente de animación para efectos activados por desplazamiento

### Estilos
- `index.css`: Estilos globales y variables CSS
- `components/components.css`: Estilos específicos de componentes

## Funcionalidad

- **Gestión de Estado**: Utiliza hooks de React (useState) para gestionar artículos del carrito y preferencias de tema
- **Datos Simulados**: Contiene datos simulados de guitarras con imágenes, nombres y precios
- **Operaciones del Carrito**: Agregar/eliminar artículos del carrito con actualizaciones en tiempo real del conteo
- **Cambio de Tema**: Alternar entre temas oscuros y claros
- **Navegación Receptiva**: Navegación con desplazamiento suave hacia diferentes secciones

## Paleta de Colores

La aplicación utiliza una paleta de colores sofisticada:
- Fondo Primario: `#0a0a0a` (oscuro) / `#ffffff` (claro)
- Fondo Secundario: `#121212` (oscuro) / `#f4f4f5` (claro)
- Color de Acento: `#d4af37` (oro) - representando lujo y calidad premium
- Colores de Texto: Tonos contrastantes para una lectura óptima

## Configuración del Proyecto

Para ejecutar este proyecto localmente:

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre tu navegador en `http://localhost:5173`

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Crea una compilación de producción
- `npm run lint`: Ejecuta ESLint para verificar problemas de código
- `npm run preview`: Previsualiza localmente la compilación de producción

## Filosofía de Diseño

RiffMaster sigue principios modernos de UI/UX con un enfoque en:
- Estética premium adecuada para instrumentos musicales de alta gama
- Experiencia de usuario intuitiva
- Jerarquía visual que enfatiza imágenes y precios de productos
- Interacciones y transiciones suaves
- Consideraciones de accesibilidad

## Público Objetivo

Esta aplicación está diseñada para:
- Entusiastas de la música que buscan guitarras premium
- Músicos profesionales que buscan instrumentos de calidad
- Coleccionistas y aficionados de guitarras
- Cualquier persona interesada en comprar guitarras eléctricas de alta gama en línea

## Mejoras Futuras

Áreas potenciales para expansión incluyen:
- Autenticación de usuarios y perfiles
- Capacidad avanzada de filtrado y búsqueda
- Reseñas y calificaciones de productos
- Integración de pagos
- Gestión de inventario
- Funcionalidad de lista de deseos
- Páginas detalladas de productos