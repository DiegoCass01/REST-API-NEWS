import Noticia from "../models/noticias.model.js";
import { uploadImage, deleteImage } from "../utils/cloudinary.js";
import fs from "fs-extra";

//Muestra todos los registros
export const getNoticias = async (req, res) => {
  try {
    const noticias = await Noticia.find();
    res.json(noticias);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Crea un registro
export const createNoticias = async (req, res) => {
  try {
    const {
      tituloNoticia,
      tipoNoticia,
      fechaPub,
      autor,
      parrafoPrincipal,
      contenidoNoticia,
    } = req.body;
    const noticia = new Noticia({
      tituloNoticia,
      tipoNoticia,
      fechaPub,
      autor,
      parrafoPrincipal,
      contenidoNoticia,
    });

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      noticia.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      console.log(noticia.image);
      await fs.unlink(req.files.image.tempFilePath);
    }

    await noticia.save();
    res.json(noticia);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Elimina un registro
export const deleteNoticias = async (req, res) => {
  try {
    const noticia = await Noticia.findByIdAndDelete(req.params.id);

    if (!noticia)
      return res.status(404).json({
        message: "Dicha noticia no existe dentro de la BD",
      });

    if (noticia.image?.public_id) {
      await deleteImage(noticia.image.public_id);
    }

    return res.json(noticia);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Busca un registro
export const getNoticia = async (req, res) => {
  try {
    const noticia = await Noticia.findById(req.params.id);

    if (!noticia)
      return res.status(404).json({
        message: "Dicha noticia no existe dentro de la BD",
      });

    return res.json(noticia);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualiza un registro
export const updateNoticias = async (req, res) => {
  try {
    const { id } = req.params;
    const noticiaUpdated = await Noticia.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.json(noticiaUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
