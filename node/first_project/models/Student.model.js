import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    class: String,
    address: String,
    age: Number,
}, {timeseries: true});

const Student = mongoose.model('Student', studentSchema);

export default Student;