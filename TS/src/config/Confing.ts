import dotenv from 'dotenv';
dotenv.config();

export default {
    port: 1999,
    urlHost: 'http://localhost:1999',
    database: "mongodb+srv://mohamedmostafa:09705886877a@blogs.cq7zo.mongodb.net/Socket?retryWrites=true&w=majority"
};
/*
    port: process.env.port,
    urlHost: process.env.urlHost,
    database: process.env.database
*/