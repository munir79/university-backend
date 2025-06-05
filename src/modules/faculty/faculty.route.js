import express from 'express';
import { facultyControllers } from './faculty.controllers.js';

const router=express.Router();

router.post('/create-faculty',facultyControllers.createFacultyControllers);
router.get('/',facultyControllers.getAllFacultyControllers);
router.get('/:id',facultyControllers.getSingelFacultyControllers);
router.patch('/update-faculty/:id',facultyControllers.UpdateFacultyControllers);
router.delete('/delete-faculty/:id',facultyControllers.deleteFacultyControllers);

export const FacultyRouter=router;

