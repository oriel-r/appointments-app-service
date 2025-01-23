# API de Turnos - Backend

Este repositorio contiene el código fuente del backend de una aplicación de turnos, construido con **Express**, **TypeScript** y **PostgreSQL**.

## Tecnologías utilizadas

- **Express**: Framework minimalista para construir aplicaciones web.
- **TypeScript**: Superset tipado de JavaScript.
- **TypeORM**: ORM para comunicación con la base de datos.
- **PostgreSQL**: Base de datos relacional.

## 📜 Descripción del Proyecto

Este proyecto tiene como objetivo desarrollar un servicio web que permita a los usuarios de un client fontend:

- 🗓️ **Crear** una cuenta, **reservar** turnos fácilmente, y **editar** su perfil
- 🔄 **Ver** y **cancelar** sus turnos según lo necesidades.
- 📋 Que un **admin** pueda **visualizar** todos los turnos reservados y sus detalles, asi como **cancelar** los mismos o **inhabilitar usuarios** si así lo requiere.

La aplicación está construida utilizando Typescript, Express con Node.js para el back-end. React en el front-end y PostgreSQL como base de datos
## Requisitos previos

- **Node.js**: Versión 16 o superior.
- **npm**: Gestor de paquetes incluido con Node.js.
- **PostgreSQL**: Instancia configurada y en funcionamiento.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/oriel-r/appointments-app-service.git
   cd appointments-app-service

2. Instalar dependencias

    ```bash
    npm install

3. Agregar las variables  de entonro a un archivo .env

   ```javascript
    PORT=A-port-to-run-the-service
    DB_USER =Your-db-user
    DB_PASSWORD=Your-db-password
    DB=The-db-name
    DB_PORT=The-port-from-run-your-db

4. Correr el proyecto

    ```bash
    npm run build && npm run start 