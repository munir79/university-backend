import express from 'express';
import { SemistarControllers } from './semistar.controllers.js';
const router=express.Router();
router.post('/create-semistar',SemistarControllers.createSemesterControllers);
router.get('/',SemistarControllers.getAllSemestersControllers);
router.get('/:id',SemistarControllers.getSingleSemesterControllers);
router.get('/update-semistar/:id',SemistarControllers.updateSemesterControllers);
router.get('/delete-semistar/:id',SemistarControllers.updateSemesterControllers);
export const  SemistartRoute=router;