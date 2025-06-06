import { DepartmentService } from "./department.service.js"

const createDepartMentControllers=async(req,res,next)=>{
   try{
     const departMentData=req.body;
    const result=await DepartmentService.createDepartmentIntoDb(departMentData);
    res.status(200).json({
        success: true,
        message:" Department created Sucessfully",
        dara:result

    })
   }catch(err){
    next(err);
   }
}

//  get all departmentControllers


const getAllDepartmentControllers=async(req,res,next)=>{
   try{
     const result=await DepartmentService.getAllDepartmentFromDb();
    res.status(200).json({
        success:true,
        message:"get all department successfully",
        data:result
    })
   }
   catch(err){
    next(err)
   }
}

// get single department
const getSinngleDepartmentControllers=async(req,res,next)=>{
   try{
     const {id}=req.params;
    const result =await DepartmentService.getSingleDeparmentFromDb(id);
    res.status(200).json({
        success:true,
        message:'get single department succesfully',
        data:result
    })
   }
   catch(err){
    next(err)
   }
}


// update department

const updateDepartmentControllers=async(req,res,next)=>{
   try{
     const {id}=req.params;
    const result=await DepartmentService.updateDepartment(id);
    res.status(200).json({
        success:true,
        message:"update department successfully",
        data:result
    })
   }
   catch(err){
    next(err)
   }
}

const deleteDepartmentControllers=async(req,res,next)=>{
   try{
     const {id}=req.params;
    const result=await DepartmentService.deleteDepartmentInDb(id);
    res.status(200).json({
        success:true,
        message:'delete  department successfully',
    })
   }catch(err){
    next(err)
   }
}

export const DepartmentControllers={createDepartMentControllers,getAllDepartmentControllers,getSinngleDepartmentControllers,updateDepartmentControllers,deleteDepartmentControllers}
