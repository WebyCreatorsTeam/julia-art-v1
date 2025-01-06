import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };

// import { cloudinary } from "@/cloudinary/config"; // your config path
// import { NextRequest } from "next/server";

// type UploadResponse = 
//   { success: true; result?: UploadApiResponse } | 
//   { success: false; error: UploadApiErrorResponse };

export const uploadToCloudinary = (
  fileUri: string, fileName: string): Promise <any> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: "auto",
        filename_override: fileName,
        folder: "julia-art", // any sub-folder name in your cloud
        use_filename: true,
      })
      .then((result) => {
        resolve({ success: true, result });
      })
      .catch((error) => {
        reject({ success: false, error });
      });
  });
};