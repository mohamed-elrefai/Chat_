import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';

export default (app: Application):void => {
    app.use(morgan('dev'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cors());
    app.use(express.static(path.join(__dirname,'img')));
    app.use(helmet());
}