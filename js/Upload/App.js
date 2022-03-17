const multer = require('multer');

const MulterStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) =>{
        const ext = file.mimetype.split('/')[1];
        cb(null, `Sagen-image${Date.now()}.${ext}`);
    }
});

const upload = multer({storage: MulterStorage});

module.exports = upload