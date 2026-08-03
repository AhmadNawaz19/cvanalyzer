import express from "express";
const router = express.Router()
import { validateFileData } from "../validators/file.schema.js";
import {upload} from '../config/config.multer.js'
import { uploadCloudinary } from "../controller/controller.file.js";

router.post('/fileupload',upload.array('resume',3),(req, res) => {
    console.log('description: ',req.body)
    console.log('file: ',req.files)
}, validateFileData, uploadCloudinary)

export default router