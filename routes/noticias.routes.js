import { Router } from 'express'
import {
  getNoticias,
  createNoticias,
  updateNoticias,
  deleteNoticias,
  getNoticia
} from '../controllers/noticias.controller.js'
const router = Router()
import fileUpload from 'express-fileupload'

router.get('/noticias', getNoticias)

router.post('/noticias', fileUpload({ useTempFiles :
  true, tempFileDir : './uploads'}), createNoticias)

router.put('/noticias/:id', updateNoticias)

router.delete('/noticias/:id', deleteNoticias)

router.get('/noticias/:id', getNoticia)

export default router 