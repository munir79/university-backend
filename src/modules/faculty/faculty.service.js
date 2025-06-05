import { FacultyModel } from "./faculty.model.js"

const createFacultyIntoDb= async(payLOad)=>{
    const result=await FacultyModel.create(payLOad);
    return result;
}

// get all faculty 

const getAllFacultyFromDb=async()=>{
    const result=await FacultyModel.find();
    return result;
}

// get Single Faculty 

const getSingleFacultyFromDb =async(id)=>{
    const result=await FacultyModel.findById(id);
    return result
}

//update faculty

const UpdateFacultyIntoDb=async(id,payLOad)=>{
    const  result=await FacultyModel.findByIdAndUpdate(id,payLOad,{
        new:true,


    })
     return result;
}

// delete faculty 

const deletefacultyFromDb=async(id)=>{
    const result=await FacultyModel.findByIdAndDelete(id);
     return result
}

export const FacultyService={createFacultyIntoDb,getAllFacultyFromDb,getSingleFacultyFromDb,UpdateFacultyIntoDb,deletefacultyFromDb}