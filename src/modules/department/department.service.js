import { DepartmentModel } from "./departmnet.model"

const createDepartmentIntoDb=async(payLoad)=>{
    const result=await DepartmentModel.create(payLoad);
    return result;

}

// get all department

const getAllDepartmentFromDb=async()=>{
    const result=await DepartmentModel.find().populate('faculty');
    return result;
}


// get single deparment 

const getSingleDeparmentFromDb=async(id)=>{
    const result =await DepartmentModel.findById(id).populate('faculty');
    return result;

}

// const delete deopartment

const deleteDepartmentInDb=async(id)=>{
    const result =await DepartmentModel.findByIdAndDelete(id);
    return result;

}

// update department
const updateDepartment=async(id,payLOad)=>{
    const result=await DepartmentModel.findByIdAndUpdate(id,payLOad,{
        new:true
    });
    return result
}

export const DepartmentService={createDepartmentIntoDb,getAllDepartmentFromDb,getSingleDeparmentFromDb,updateDepartment,deleteDepartmentInDb}