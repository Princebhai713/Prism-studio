
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Uploads a file to Cloudinary.
 * @param fileUri The data URI of the file to upload.
 * @param folder Optional folder name in Cloudinary.
 * @returns The result of the upload.
 */
export async function uploadToCloudinary(fileUri: string, folder: string = 'prism-studio-uploads') {
  try {
    console.log('[Cloudinary] Initiating upload for size:', Math.round(fileUri.length / 1024), 'KB');
    
    const result = await cloudinary.uploader.upload(fileUri, {
      folder,
      resource_type: 'auto', // Automatically detects image, video, or raw
    });
    
    console.log('[Cloudinary] Upload successful:', result.secure_url);
    return result;
  } catch (error: any) {
    console.error('[Cloudinary] Upload error detailed:', error.message || error);
    throw new Error(error.message || 'Failed to upload file to Cloudinary');
  }
}

export default cloudinary;
