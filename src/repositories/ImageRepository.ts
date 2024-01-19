import { NextFunction } from "express";
import Image from "../models/Image";

const createImageUrl = async ( image: string, next: NextFunction ) => {

  const fullImageUrl = `https://res.cloudinary.com/dpnxlhyj2/image/upload/${image}`;

  try {
    const result = await Image.create({
      imageUrl: fullImageUrl
    })

    if (!result) {
      return next(new Error("Error creating image url."))
    }

    return {
      data: result,
      message: "Image saved successfully",
    };
  } catch (error) {
    next(error)
  }
};

const findAllImages = async ( next: NextFunction ) => {
  try {
    const allImages = await Image.find({})

    if (allImages.length === 0) {
      return next(new Error("No available image"))
    }

    return {
      data: allImages,
    };
  } catch (error) {
    next(error);
  }
}


export {
  createImageUrl,
  findAllImages
}
