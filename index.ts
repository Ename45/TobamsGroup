import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {connectToDatabase} from "./src/config/db"
import route from "./src/routes/ImageRoute"
import { errorHandler } from "./src/middlewares/error"
import swaggerSpec from "./swagger"
import swaggerUi from 'swagger-ui-express'
dotenv.config()
const app = express()


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);


app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; font-src 'self' http://localhost:8030/docs/; style-src 'self' 'unsafe-inline' http://localhost:8030/docs/; script-src 'self' 'unsafe-inline' http://localhost:8030/docs/; connect-src 'self' http://localhost:8030; img-src 'self' http://localhost:8030/docs/ data:;"
  );
  return next();
});


const port: number = parseInt(process.env.PORT || "8030")

const swaggerDocs = (app: express.Application, port: number): void => {
  app.use('/docs', swaggerUi.serveFiles(swaggerSpec), swaggerUi.setup(swaggerSpec));

  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}



app.use("/api/tobams_group", route);
swaggerDocs(app, port);

app.use(errorHandler)



app.listen(process.env.PORT, async() => {
  try {
    await connectToDatabase();
    console.log("server is running on this port", process.env.PORT);
  } catch (error: any) {
    console.error("Error connecting to the database:", error.message);
  }
});