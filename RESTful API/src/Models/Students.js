//Schema and Models
const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
    },
    age:{
        type:Number,
        min:3,
        max:18,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email-Id already exists"],
        validate(value){
            if(!validator.isEmail(value){
                throw new Error('Invalid Email');
            })
        }
    },
    password:String,
    gender:String,
    address:{
        type:String
        required:true,
    },
    city:{
        type:String
        required:true,
    },
    state:String,
    reg_No:{
        type:Number
        required:true,
    },
    class:{
        type:Number
        minlength:1,
        maxlength:12,
    },
    phone:{
        type:Number,
        required:true,
        min:10,
        max:10,
        unique:[true,"Phone-Number already exists"]
        validator.isMobilePhone(value){
            if(!validator.isMobilePhone(value){
                throw new Error('Invalid Phone Number');
            }
    },


})