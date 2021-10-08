

const express = require ('express');
const  Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({

       name:{
           type : String
           
       },
    
        phone:{
            type : String
        },

        email : {
            type  : String
        },

        job :{
            type : String
        }
})

const User = new Mongoose.model("Users", UserSchema )
module.exports =  User;