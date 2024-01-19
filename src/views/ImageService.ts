import { NextFunction } from "express";
import { createImageUrl } from "../repositories/ImageRepository"

const uploadImage = async ( image: string, next: NextFunction ) => {
  if (!image) {
    // throw new Error("Image required")
    return next(new Error("Image required"))
  }

  const imageUrl = await createImageUrl( image, next );

  return imageUrl
}

const retrieveImage = async ( id: string ) => {

}

export {
  uploadImage,
  retrieveImage
}


