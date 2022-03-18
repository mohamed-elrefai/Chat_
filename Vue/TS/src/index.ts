import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose,  { ConnectOptions }  from 'mongoose';
import Auth from './routers/Auth';
import Config from './config/Confing';
const app:Application = express();

let port: Number = Config.port;
let urlHost: String = Config.urlHost;
let database: string = Config.database;

// Connect Database
mongoose.connect(database, { useNewUrlParser: true ,useUnifiedTopology: true } as ConnectOptions)
    .then(result=>{
        app.listen(port,():void =>{
            console.log(urlHost)
        })
    }).catch(err => console.log(err));

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// Router
app.use(Auth)
