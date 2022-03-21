import multer from "multer";
import path from "path";

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname, '../images'));
    },
    filename: (req, file, cb) =>{
        const ext = file.mimetype.split('/')[1];
        cb(null, `Sagen-Image ${Date.now()}.${ext}`)
    }
});

const upload = multer({storage: multerStorage});

export default upload;