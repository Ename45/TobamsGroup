import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {connectToDatabase} from "./src/config/db"
import route from "./src/routes/ImageRoute"
import { errorHandler } from "./src/middlewares/error"
dotenv.config()
const app = express()


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(
  cors({
    origin: "",
    credentials: true,
  })
);

app.use("/api/tobams_group", route);

app.use(errorHandler)

app.listen(process.env.PORT, async() => {
  await connectToDatabase();
  console.log("server is running on this port", process.env.PORT)
});