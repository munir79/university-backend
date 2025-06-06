import mongoose from "mongoose";

const departmentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
  faculty:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'faculty',
    required:true,

  }
},
{
    timestamps:true
})

export const DepartmentModel=mongoose.model('Department',departmentSchema);