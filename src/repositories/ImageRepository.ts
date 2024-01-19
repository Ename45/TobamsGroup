import { NextFunction } from "express";
import Image from "../models/Image";

const createImageUrl = async ( image: string, next: NextFunction ) => {

  const fullImageUrl = `https://res.cloudinary.com/dpnxlhyj2/image/upload/${image}`;

  try {
    const result = await Image.create({
      imageUrl: fullImageUrl
    })

    if (!result) {
      // throw new Error("Error creating image url.");
      return next(new Error("Error creating image url."))
    }

    return {
      data: result,
      message: "Image saved successfully",
    };
  } catch (error) {
    // throw new Error(`${error}`);
    next(error)
  }
};


export {
  createImageUrl
}
