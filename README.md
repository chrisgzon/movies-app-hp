# Proyecto de Búsqueda de Películas

Este proyecto es una aplicación web para buscar y listar películas. Utiliza React para la interfaz de usuario y Firebase para la autenticación.

## Instalación

Sigue estos pasos para clonar el proyecto e instalar los paquetes necesarios:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/chrisgzon/movies-app-hp.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd movies-app-hp
    ```

3. Instala los paquetes necesarios:
    ```sh
    npm install
    ```

4. Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables de entorno:
    ```sh
    # Movies API
    REACT_APP_MOVIES_API_KEY=tu_movies_api_key
    REACT_APP_BASE_URL=http://www.omdbapi.com/

    # Firebase configuration
    REACT_APP_FIREBASE_API_KEY=tu_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=tu_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=tu_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=tu_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=tu_firebase_app_id
    ```

## Estructura del Proyecto

- `public/`: Contiene archivos públicos como `index.html`, `manifest.json` y `robots.txt`.
- `src/`: Contiene el código fuente de la aplicación.
  - `components/`: Componentes reutilizables como `BtnSearch.jsx`, `CardMovie.jsx`, `Filters.jsx`, `Loader.jsx`, `MovieList.jsx`, `MovieListHeading.jsx`, `Protected.jsx` y `SearchBox.jsx`.
  - `hooks/`: Hooks personalizados como `useAuth.js` y `useMovies.js`.
  - `pages/`: Páginas de la aplicación como `Home`, `Login` y `Signup`.
  - `services/`: Servicios como `searchMovies.js`.
  - `firebase.js`: Configuración de Firebase.
  - `setupTests.js`: Configuración de pruebas.

## Uso

Para iniciar la aplicación en modo de desarrollo, ejecuta:
```sh
npm start