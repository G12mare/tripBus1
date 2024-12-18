# TRIBUS

## Descripción general del repositorio
Ofrece una experiencia optimizada para los usuarios interesados en buscar, comparar y reservar paquetes de viaje en autobús. También incluye soporte para la gestión de ofertas por parte de las agencias de viajes.

## Propósito dentro del proyecto global

El sitio web TripBus, implementa un diseño profesional y responsivo. Este frontend se integra con el backend desarrollado en Node.js para gestionar datos de usuarios, agencias y paquetes de viaje

## Instrucciones de instalación y configuración y ejecución 
1.REQUISITOS PREVIOS
-Node.js (v16.x o superior)
-npm (v7.x o superior) o yarn (v1.22.x o superior)
-Un servidor local o herramientas como Live Server para probar HTML estático.

2.CLONAR EL REPOSITORIO
Clona el repositorio

3.INSTALAR DEPENDENCIAS
-Ejecuta el siguiente comando para instalar dependencia
  *npm install

4.CONFIGURAR VARIABLES DE ENTORNO
REACT_APP_API_URL=https://api.tripbus.com
REACT_APP_GOOGLE_MAPS_KEY=tu_clave_api_de_google_maps


5.EJECUTAR EL PROYECTO EN MODO DE DESARROLLO
*npm start

6. GENERAR LA VERSIÓN DE PRODUCCIÓN
*npm run build

## Dependencias Requeridas
A continuación, se presenta una lista de herramientas, bibliotecas y APIs utilizadas en este proyecto, junto con sus versiones específicas:

## Frameworks y herramientas
- React (v18.2.0)
- React Router DOM: v6.15.0
- Axios: v1.4.0 (para la comunicación con el backend)
- Bootstrap: v5.3.2 (utilizado por el template para diseño responsivo)

## APIs Usadas
-Google Maps API: v3 (para mapas interactivos en las búsquedas de destinos)
-Backend de TripBus: v1.0.0 (API personalizada para gestión de usuarios, agencias y paquetes de viaje)

## Notas Adicionales
- Asegúrate de que el backend de TripBus esté configurado y en ejecución antes de probar la integración con el frontend.
- Consulta la documentación del backend para obtener información detallada sobre los endpoints disponibles y las estructuras de datos requeridas.