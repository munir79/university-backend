import { FacultyService } from "./faculty.service.js";

// create faculty 
const createFacultyControllers=async(req,res,next)=>{
    try{
       const facultyData=req.body;
       const result=await FacultyService.createFacultyIntoDb(facultyData);
       res.status(200).json({
        success:true,
        message:" create faculty  sucessfully",
        data:result
       })
    }
    catch(err){
        next(err)
    }
}

// get All faculty 
const getAllFacultyControllers=async(req,res,next)=>{
    try{
     const result=await FacultyService.getAllFacultyFromDb();
     res.status(200).json({
        success:true,
        message:"Get All Faculty successfully",
        data:result
        
     })

    }
    catch(err){
        next(err)
    }
}

// get single faculty 
const getSingelFacultyControllers=async(req,res,next)=>{
   try{
     const {id}=req.params;
    const result=await FacultyService.getSingleFacultyFromDb(id);
    res.status(200).json({
        success:true,
        message:" get single faculty sucessfully",
        data:result
    })
   }catch(err){
    next(err)
   }


}

// update faculty 

const UpdateFacultyControllers=async(req,res,next)=>{
   try{
     const {id}=req.params;
    const facultyData=req.body;
    const result=await FacultyService.UpdateFacultyIntoDb(id,facultyData);
    res.status(200).json({
        success:true,
        message:" update faculty data sucessfully",
        data:result
    })
   }
   catch(err){
    next(err)
   }

}

// delete faculty 

const deleteFacultyControllers=async(req,res,next)=>{
   try{
   const {id}=req.params;
    const result=await FacultyService.deletefacultyFromDb(id);
    res.status(200).json({
        success:true,
        message:" deleted faculty successfully",
        data:result
    })
   }
   catch(err){
    next(err)
   }
}
export const facultyControllers={
    createFacultyControllers,
    getAllFacultyControllers,
    getSingelFacultyControllers,
    deleteFacultyControllers,
    UpdateFacultyControllers
}