import { uploadImage, retrieveImage } from "../views/ImageService"
import { NextFunction, Request, Response } from "express"


const uploadImageReq = async( req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file || !req.file.filename) {
      // throw new Error("Select an image");
      return next(new Error("Select an image"))
    }

    const response = await uploadImage(req.file.filename, next)
    return res.json(response)
  } catch (error: any) {
    // return res.status(500).json({ error: error.message });
    res.status(500);
    next(error.message)
  }
}

const retrieveImageReq = async( req: Request, res: Response) => {
  try {
    const response = await retrieveImage(req.body)
    console.log("retrieve response in controller is", response)
    return res.json(response)
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

export {
  uploadImageReq,
  retrieveImageReq
}