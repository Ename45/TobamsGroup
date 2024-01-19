import { uploadImage, retrieveImage } from "../views/ImageService"
import { NextFunction, Request, Response } from "express"


const uploadImageReq = async( req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file || !req.file.filename) {
      return next(new Error("Select an image"))
    }

    const response = await uploadImage(req.file.filename, next)
    return res.json(response)
  } catch (error: any) {
    res.status(500);
    next(error.message)
  }
}

const retrieveImageReq = async( req: Request, res: Response, next: NextFunction) => {
  try {
    const allImages = await retrieveImage( next );
    return res.json(allImages)
  } catch (error: any) {
    res.status(500);
    next(error.message)
  }
}

export {
  uploadImageReq,
  retrieveImageReq
}