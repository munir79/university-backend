import express from 'express';
import { SessionControllers } from './sessions.controllers.js';

const router=express.Router();
router.post('/create-session',SessionControllers.createSessionControllers);
router.get('/',SessionControllers.getAllSessionsControllers);
router.get('/:id',SessionControllers.getSingleSessionControllers);
router.patch('/update-session/:id',SessionControllers.updateSessionControllers);
router.delete('/delete-session/:id',SessionControllers.deleteSessionControllers);

export const SessionRouter=router;