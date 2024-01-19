import { Router } from "express";
import { uploadImageReq, retrieveImageReq } from "../controllers/ImageController";
import { upload } from "../middlewares/ImageMiddleware";

const route = Router();

/**
     * @openapi
     * paths:
 *   /api/tobams_group/upload_Image:
 *     post:
 *       tags:
 *         - Upload Image Controller
 *       summary: Upload image to database
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 image:
 *                   type: string
 *                   format: binary
 *       responses:
 *         200:
 *           description: Successful response
 *         400:
 *           description: Bad Request
 *         500:
 *           description: Internal Server Error
     */


route.post("/upload_Image", upload.single("image"), uploadImageReq)


/**
     * @openapi
     * paths:
 *   /api/tobams_group/retrieve_Image:
 *     get:
 *       tags:
 *         - Retrieve Image Controller
 *       summary: Retrieve image from database
 *       responses:
 *         200:
 *           description: Successful response
 *         400:
 *           description: Bad Request
 *         500:
 *           description: Internal Server Error
     */
route.get("/retrieve_Image", retrieveImageReq)


export default route