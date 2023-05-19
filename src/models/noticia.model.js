const mongoose = require("mongoose");

const noticiaSchema = mongoose.Schema(
  {
    tituloNoticia: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    tipoNoticia: {
      type: String,
      required: true,
      trim: true,
    },
    fechaPub: {
      type: String,
      required: true,
      trim: true,
    },
    autor: {
      type: String,
      required: true,
      trim: true,
    },
    parrafoPrincipal: {
      type: String,
      required: true,
      trim: true,
    },
    contenidoNoticia: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      public_id: String,
      secure_url: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Noticia', noticiaSchema);