import dotenv from 'dotenv';
dotenv.config();

export default {
    port: process.env.port,
    urlHost: process.env.urlHost,
    database: process.env.database
};
/*
    
*/