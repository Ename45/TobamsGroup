import swaggerJsdoc from "swagger-jsdoc";


    const options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'Tobams Group Image API',
          description: "API endpoints for an image upload and retrieval services documented on swagger",
          contact: {
            name: "Inemesit Udousoro",
            email: "enamesit@gmail.com",
          },
          version: '1.0.0',
        },
        servers: [
          {
            url: "http://localhost:8030/",
            description: "Local server"
          },
          {
            url: "http://localhost:8030/",
            description: "Live server"
          },
        ]
      },
      apis: ['./src/routes/*.ts'],
    }
    const swaggerSpec = swaggerJsdoc(options)
    
    export default swaggerSpec