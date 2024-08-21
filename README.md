# Contador de Calorías


## Descripción

**Contador de Calorías** es una aplicación web que permite a los usuarios registrar y consultar el contenido calórico de diferentes alimentos. La aplicación está diseñada para ser intuitiva y fácil de usar, ayudando a las personas a llevar un control de su ingesta diaria de calorías.

## Tecnologías Utilizadas

- **Frontend**: [React](https://reactjs.org/), [React Router](https://reactrouter.com/), [Axios](https://axios-http.com/), [Bootstrap](https://getbootstrap.com/)
- **Backend**: [Express.js](https://expressjs.com/), [Node.js](https://nodejs.org/), [MongoDB](https://www.mongodb.com/) (opcional)
- **Despliegue**: [Vercel](https://vercel.com/) para el frontend, [GitHub](https://github.com/) para control de versiones

## Instalación

Para ejecutar la aplicación localmente, sigue estos pasos:

**Frontend**

Clona el repositorio:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/antoniolv88/CuentaKcal.git

2. Navega a la carpeta:
   ```bash
    cd PROYECTO_KCAL/frontend

3. Instala las dependencias:
   ```bash
    npm install

4. Inicia el servidor de desarrollo:
   ```bash
    npm start

La aplicación estará disponible en http://localhost:3000.

**Backend**

1. Navega a la carpeta del backend:
   ```bash
    cd PROYECTO_KCAL/backend

2. Instala las dependencias:
   ```bash
    npm install

3. Inicia el servidor:
   ```bash
    node index.js

El servidor estará disponible en http://localhost:3001 (ajusta el puerto si es necesario).

## Uso
**Frontend**

Página de Inicio: Visualiza el resumen de calorías.
Registro de Comidas: Añade nuevas comidas y registra las calorías.
Consulta de Alimentos: Busca alimentos y consulta su contenido calórico.

**Backend**
Endpoints:
-**GET /api/foods**: Obtén la lista de alimentos.
-**POST /api/foods**: Añade un nuevo alimento.
-**GET /api/foods/:id**: Obtén detalles de un alimento específico.
-**PUT /api/foods/:id**: Actualiza un alimento.
-**DELETE /api/foods/:id**: Elimina un alimento.

**Contribuciones**
Las contribuciones son bienvenidas. Por favor, sigue estos pasos para contribuir:

Haz un fork del repositorio.
Crea una rama para tu característica (git checkout -b feature/nueva-caracteristica).
Realiza tus cambios y haz commit (git commit -am 'Añadir nueva característica').
Haz push a la rama (git push origin feature/nueva-caracteristica).
Abre una solicitud de extracción (Pull Request) en GitHub.


## Licencia
Este proyecto está licenciado bajo la MIT License.


**Estado del Proyecto**
En desarrollo: ¡Estamos trabajando en nuevas características y mejoras!
Próximos pasos: Añadir autenticación de usuario, mejorar la interfaz, integrar con APIs de alimentos.