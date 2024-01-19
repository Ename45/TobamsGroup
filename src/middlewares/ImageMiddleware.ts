import cloudinary from "../utils/cloudinary";
import multer from "multer";
import { CloudinaryStorage as Storage } from "multer-storage-cloudinary";


const cloudStorage = new Storage({
  cloudinary,
  params: {
    allowed_formats: ['jpg', 'png', 'gif'],
    unique_filename: true,
    folder: "tobamsImage/assets",
  }  as any
});


const upload = multer({
  storage: cloudStorage,
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedFormats = ['jpg', 'png', 'gif'];

    if (allowedFormats.includes(file.originalname.split('.').pop().toLowerCase())) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file format"), false);
      
    }
  },
});



export {
  upload
}
