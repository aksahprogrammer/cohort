import express from "express";

import { addStudent, editStudent, deleteStudent } from "../controllers/student.controller.js";


const router = express.Router();

router.get('/add', addStudent);
router.get('/edit', editStudent);
router.get('/delete', deleteStudent);


export default router;