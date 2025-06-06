import { DepartmentModel } from "../department/departmnet.model.js";
import { SemistarModel } from "../semistar/semistar.model.js";
import { SessionModel } from "../sessions/session.model.js";
import { Student } from "./student.model.js";
import generateStudentId from "./student.utils.js";



const CreateStudent = async (payLoad) => {
  const { academicSemistar, academicDepartment ,academicSession} = payLoad;


  
  // ১. রেফারেন্স ডেটা খুঁজে বের করো
  const session = await SessionModel.findById(academicSession);
  const semester = await SemistarModel.findById(academicSemistar);
  const department = await DepartmentModel.findById(academicDepartment);

    if (!session || !semester || !department) {
    throw new Error('Invalid session, semester or department');
  }

  
  // ২. ওই combination-এ কয়জন student আছে?
  const count = await Student.countDocuments({
    academicSession,
    academicSemistar,
    academicDepartment,
  });

   // ৩. Student ID বানাও
  const studentId = generateStudentId(
    session.code.split('-')[0], // '25'
    semester.name,              // 'fall'
    department.name,            // 'CSE'
    count
  );

    // ৪. Student save করো
  const student = await Student.create({
    ...payLoad,
    StudentId: studentId,
  });

  return student;
};

//  get all student from db 

const getAllStudentFromDb=async()=>{
    const result =await Student.find()
    .populate({
        path:'academicDepartment',
        populate:{
            path:'faculty'
        }
    })
    .populate('academicSession')
    .populate('academicSemistar')
    
   
  
     return result;
}


// get single student from db 

const getSingleStudentFromDb=async(id)=>{
    const result =await Student.findById(id)
    .populate({
        path:'academicDepartment',
        populate:{
            path:'faculty'
        }
       
    })
     .populate('academicSemistar')
        .populate('academicSession')
     return result;
}
export const StudentService={CreateStudent,getAllStudentFromDb,getSingleStudentFromDb};