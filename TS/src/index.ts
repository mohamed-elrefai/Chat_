import express, {Application,Request, Response} from 'express';
import middleware from './middleware/index'; 
import mongoose,  { ConnectOptions }  from 'mongoose';
import Auth from './routers/Auth';
import user from './routers/User';
import msg from './routers/Message';
import Config from './config/Confing';
import logger from "./utils/logger";
import upload from './Upload/Multer';
const app:Application = express();

let port: Number = Config.port;
let urlHost: String = Config.urlHost;
let database: string = Config.database;


// Connect Database
mongoose.connect(database, { useNewUrlParser: true ,useUnifiedTopology: true } as ConnectOptions)
    .then(result=>{
        app.listen(port,():void =>{
            logger.info(urlHost)
        })
    }).catch(err => console.log(err));


// Middleware
middleware(app);


// Router

// Upload images
app.post('/Api/UploadImage', upload.single('img'), (req:Request, res:Response)=>{
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
})

// Routes
app.use(Auth)
app.use(user)
app.use(msg)
