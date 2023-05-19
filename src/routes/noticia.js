const express = require("express");
const noticiaSchema = require("../models/noticia.model");
const router = express.Router();

//create noticia
router.post("/noticias", (req, res) => {
  const noticia = noticiaSchema(req.body);
  noticia
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get noticias
router.get("/noticias", (req, res) => {
  noticiaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get noticia especifica
router.get("/noticias/:id", (req, res) => {
  const { id } = req.params;
  noticiaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//actualizar noticia
router.put("/noticias/:id", (req, res) => {
  const { id } = req.params;
  const {
    tituloNoticia,
    tipoNoticia,
    fechaPub,
    autor,
    parrafoPrincipal,
    contenidoNoticia,
  } = req.body;
  noticiaSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          tituloNoticia,
          tipoNoticia,
          fechaPub,
          autor,
          parrafoPrincipal,
          contenidoNoticia,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete noticia
router.delete("/noticias/:id", (req, res) => {
  const { id } = req.params;
  noticiaSchema
    .findByIdAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
