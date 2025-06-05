import mongoose from "mongoose";

const facultySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,

    },
},
{
    timestamps:true
}
)

export const FacultyModel=mongoose.model('faculty',facultySchema)