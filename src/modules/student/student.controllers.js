import { StudentService } from "./student.service.js";


const createStudentControllers=async(req,res,next)=>{
    try{
      const studentData=req.body;
      const result =await StudentService.CreateStudent(studentData);
      res.status(200).json({
        success:true,
        message:" student created Successfully",
        data:result
      })
    }
    catch(err){
        next(err)
    }
}

// get all student 

const getAllStudentControllers=async(req, res, next)=>{
    try{
    const result= await StudentService.getAllStudentFromDb();
    res.status(200).json({
        success:true,
        message:'Student retrive successfullly',
        data:result
    })
    }
    catch(err){
        next(err)
    }
}

//  get single student from db 
 
 const getSingleStudentControllers=async(req,res, next)=>{
    try{
    const {id}=req.params;
    const result=await StudentService.getSingleStudentFromDb(id);
    res.status(200).json({
        success:true,
        message:" get student successfully",
        data:result
    })

    }
    catch(err){
        next(err)
    }
 }

  export const StudentControllers={createStudentControllers,getAllStudentControllers,getSingleStudentControllers}