

import express from 'express';
import { DepartmentControllers } from './department.controllers.js';
 const router=express.Router();

 router.post('/create-department',DepartmentControllers.createDepartMentControllers);
 router.get('/',DepartmentControllers.getAllDepartmentControllers);
 router.get('/:id',DepartmentControllers.getSinngleDepartmentControllers);
 router.patch('/update-department',DepartmentControllers.updateDepartmentControllers);
 router.delete('/delete-department',DepartmentControllers.deleteDepartmentControllers);

 export const DepartmnetRoute=router;