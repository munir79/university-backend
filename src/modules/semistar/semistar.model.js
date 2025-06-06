
import mongoose from "mongoose"
const semistarSchema= new  mongoose.Schema({
    name:{
        type:String,
        required:true,
        enum:['spring','summer','fall'],

    },
    year:{
        type:Number,
        required:true,

    },
    startMonth:{
        type:String,
        required:true,
    },
    endMonth:{
        type:Number,
        required:true
    },
    semestarCode:{
        type:String,
        
        
    }
},
{
    timestamps:true
})

// ✅ Fixed code mapping
const SEMESTER_CODE_MAP = {
  spring: '01',
  summer: '02',
  fall: '03',
};

// Automatically set semesterCode before saving
semistarSchema.pre('save', function (next) {
  this.semestarCode = SEMESTER_CODE_MAP[this.name];
  next();
});

export const SemistarModel =mongoose.model('semistar',semistarSchema)