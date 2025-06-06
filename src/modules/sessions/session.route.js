import express from 'express';
import { SemistarControllers } from '../semistar/semistar.controllers.js';
import { SessionControllers } from './sessions.controllers';

const router=express.Router();
router.post('/create-session',SemistarControllers.createSemesterControllers);
router.get('/',SessionControllers.getAllSessionsControllers);
router.get('/:id',SessionControllers.getSingleSessionControllers);
router.patch('/update-session',SessionControllers.updateSessionControllers);
router.delete('/delete/:id',SessionControllers.deleteSessionControllers);

export const SessionRouter=router;