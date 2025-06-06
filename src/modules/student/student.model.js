import mongoose from "mongoose";

const NameSchema={
    firstName:{
        type:String,
        require:true
    },
    middleName:{
    type:String
    },
    lastName:{
      type:String,
      required:true
    }
}

const guardianSchema = {
  fatherName: { type: String, required: true },
  fatherPhone: { type: String, required: true },
  motherName: { type: String, required: true },
  motherPhone: { type: String, required: true },
};

const localGuardianSchema = {
  name: { type: String },
  phone: { type: String },
  address: { type: String },
};

const StudentSchema=new mongoose.Schema({

    StudentId:{
        type:String,
        unique:true
    },
    name:NameSchema,
    gender:{
        type:String,
        enum:['male','female'],
        required:true,
    },
    DateOfBirth:{
        type:Date,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    contcatNo:{
        type:String,
        required:true,
    },
    emergencyContactNumber:{
        type:String,
        required:true,
    },
      presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    guardian:guardianSchema,
    localGuardian:localGuardianSchema,
    academicSemistar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'semistar',
        required:true,
    },
    academicDepartment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department',
        required:true,

    },
    academicSession:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Session',
        required:true

    }


},
{
    timestamps:true
})

export const Student=mongoose.model('student',StudentSchema);