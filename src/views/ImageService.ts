import { NextFunction } from "express";
import { createImageUrl, findAllImages } from "../repositories/ImageRepository"

const uploadImage = async ( image: string, next: NextFunction ) => {
  if (!image) {
    return next(new Error("Image required"))
  }

  const imageUrl = await createImageUrl( image, next );

  return imageUrl
}

const retrieveImage = async ( next: NextFunction ) => {
  const allImages = await findAllImages( next );

  return allImages
}

export {
  uploadImage,
  retrieveImage
}


