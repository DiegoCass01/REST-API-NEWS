import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({ 
  cloud_name: 'dvvori2ia', 
  api_key: '694742612782275', 
  api_secret: '__rTAO_l0ZSKEzusTEw_6EMrtjw',
  secure: true
});

export async function uploadImage(filePath){
  return await cloudinary.uploader.upload(filePath, {
    folder: 'noticias'
  })
}

export async function deleteImage(publicId) {
  return await cloudinary.uploader.destroy(publicId)
}
