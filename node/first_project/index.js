import express from 'express';
import dotenv from "dotenv";
import cors from "cors";

import dbConnection from './utils/db.js';


dotenv.config();

const app = express();

const port = process.env.PORT || 4000;

app.use(cors({
    origin: process.env.BASE_URL+":"+port,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json()); // Taking data in json format from request
app.use(express.urlencoded({extended: true}))// Taking data from url requst

app.get('/', (req, res) => {
    res.send('Cohort');
});

app.get('/ashok', (req, res) => {
    res.send('Hello Ashok');
})

//Connect to db
dbConnection();

app.listen(port, () => {
    console.log('Server is running on port no. ' + port);
});