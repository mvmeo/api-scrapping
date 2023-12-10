# Web Scraping de Productos de Ciclismo

Este proyecto consiste en un servicio de web scraping desarrollado con Cloudflare Workers que busca productos de ciclismo en diversas páginas web, como Decathlon, CrossMountain, 5Norte, entre otras. El objetivo es consolidar la información de estos productos en una sola plataforma web para facilitar la búsqueda y comparación para los usuarios interesados en productos relacionados con el ciclismo.

## Funcionalidades Principales

1. **Web Scraping Automatizado:** El servicio utiliza técnicas de web scraping para recopilar información sobre productos de ciclismo de diferentes sitios web.

2. **Soporte para Múltiples Sitios:** Se han implementado scraping scripts específicos para sitios populares de productos de ciclismo, como Decathlon, CrossMountain, 5Norte, entre otros. Esto permite una amplia cobertura de productos.

3. **Consolidación de Datos:** La información recopilada se almacena y estructura de manera uniforme, facilitando su presentación en la plataforma web final.

## Configuración del Proyecto

### Requisitos Previos

- [Node.js](https://nodejs.org/) instalado localmente para desarrollo y prueba.

### Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/polaarts/ciclismo-scrapper.git
    ```

2. Instala las dependencias del proyecto:

   ```bash
   npm i
    ```
## Uso del servicio

En el directorio [./src/tiendas/](./src/tiendas/) se encuentran las carpetas de cada sitio web para su web scrapping. Estos scripts se ejecutan con [Puppeteer](https://pptr.dev/) dentro de la carpeta categorias y se encargan de recopilar la información de los productos de cada sitio web. La información recopilada se almacena en una base de datos [PostgreSQL](https://www.postgresql.org/) utilizando [PG](https://node-postgres.com/).

Si desea añadir un nuevo sitio web, debe crear una nueva carpeta en [./src/tiendas/](./src/tiendas/) con el nombre del sitio web y dentro de esta carpeta crear un archivo llamado `index.js` que contenga el script de web scraping y otro archivo llamado `utils.js` que contenga las funciones auxiliares necesarias para el web scraping. Cada sección/categoría de producto que desee añadir debe tener su propio archivo `.js` dentro de la carpeta `categoría` en el sitio web correspondiente.

Para facilitar la implementación es recomendable añadir todos los selectores e información requerida del sitio web en los archivos `data-tiendas.js` y `selectors.js` para así poder reutilizarlos en los scripts de web scraping.

### Ejecución de los scripts

Para ejecutar en local los scripts de web scraping se debe utilizar el siguiente comando:

```bash
npm run dev
```

# IMPORTANTE

Cualquier consideración, opinión, comentario o error en la documentación o en el código, por favor reportarlo a Samuel Angulo mediante el correo `hey@samuelangulo.com` o a través de un issue en este repositorio.