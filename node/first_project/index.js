import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Cohort');
});

app.get('/ashok', (req, res) => {
    res.send('Hello Ashok');
})

app.listen(port, () => {
    console.log('Server is running on port no. ' + port);
});