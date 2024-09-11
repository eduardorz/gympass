declare module 'swagger-jsdoc' {
    import { OpenAPIV3 } from 'openapi-types';
  
    // Definimos la interfaz de opciones para swagger-jsdoc
    interface SwaggerOptions {
      definition: OpenAPIV3.Document;
      apis: string[];
    }
  
    // Definimos la función que exporta el módulo
    function swaggerJsdoc(options: SwaggerOptions): OpenAPIV3.Document;
  
    // Exportamos la función como exportación por defecto
    export default swaggerJsdoc;
  }
  