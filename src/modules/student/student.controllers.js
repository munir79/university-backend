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

  export const StudentControllers={createStudentControllers}