import express from 'express';
import { StudentControllers } from './student.controllers.js';

const router=express.Router();
router.post('/create-student',StudentControllers.createStudentControllers);
router.get('/',StudentControllers.getAllStudentControllers);
router.get('/:id',StudentControllers.getSingleStudentControllers);

export const StudentRouter=router;