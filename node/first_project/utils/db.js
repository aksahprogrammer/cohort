import mongoose from "mongoose";


//export a function that connect to db
const dbConnection = () => {
    try {
        mongoose.connect(process.env.MONOG_DB_URL);
        console.log('Database is connected');
    } catch (error) {
        console.log('Database not connected' + error);
    }
}


export default dbConnection;
