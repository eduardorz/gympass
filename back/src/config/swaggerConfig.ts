
import Options from "swagger-jsdoc";

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gympass',
      version: '1.0.0',
      description: 'Documentación de la API de Gympass',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Cambia esto a tu URL de desarrollo
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Ruta a tus archivos donde defines las rutas de tu API
};

export default swaggerOptions;
