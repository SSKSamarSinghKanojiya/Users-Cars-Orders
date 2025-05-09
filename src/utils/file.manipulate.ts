import cloudinary from "../config/db/cloudinary";
export async function uploadImageToCloudinary(image: any, folder: string) {
  const fileBase64 = image.buffer.toString("base64");
  const fileUpload = `data:${image.mimetype};base64,${fileBase64}`;
  return await cloudinary.uploader.upload(fileUpload, {
    folder: folder,
  });
}

export async function deleteImageFromCloudinary(publicId: string) {
  try {
    await cloudinary.uploader.destroy(`${publicId}`);
  } catch (error) {
    console.log("Error deleting image from cloudinary : ", error);
  }
}
