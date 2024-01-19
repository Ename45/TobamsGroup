import { Router } from "express";
import { uploadImageReq, retrieveImageReq } from "../controllers/ImageController";
import { upload } from "../middlewares/ImageMiddleware";

const route = Router();


route.post("/upload_Image", upload.single("image"), uploadImageReq)
route.get("/retrieve_Image", retrieveImageReq)


export default route