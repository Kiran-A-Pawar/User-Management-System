const express = require("express");
const  User = require("../models/UserData")
const router = new express.Router();

router.post("/user",async(req,res)=>{
    try{

      var newUser =new User();
      newUser.name= req.body.name;
      newUser.phone = req.body.phone;
      newUser.email = req.body.email;
      newUser.job = req.body.job;

     console.log(req.body)
   const inserUser = await newUser.save();
   res.send(inserUser)
 
    }catch(e){
      res.status(400).send(e)
    }

})

// router.post("/user",function(req,res){
//         console.log('user is created');
//         var newUser =new User();
//         newUser.name= req.body.name;
//         newUser.phone = req.body.phone;
//         newUser.email = req.body.email;
//         newUser.job = req.body.job;
//         newUser.save(function(err,inserUser){
//           if (err){
//             console.log('Error for saving vedio');
//           } else{
//             res.json(inserUser)
//           }
//         });
//       });


// router.route('/').post((req, res, next) => {
//   User.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// });


router.get("/user",async(req,res)=>{
    try{

       const getuser = await User.find({});
   res.send(getuser)
 
    }catch(e){
      res.status(201).send(e)
    }

})



router.get("/user/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getuser = await User.findById(_id);
   res.send(getuser)
 
    }catch(e){
      res.status(201).send(e)
    }

})

router.patch("/user/:_id",async(req,res)=>{
    try{
       const  _id = req.params._id;
       console.log(req.body)

       const getuser = await User.findByIdAndUpdate(_id,req.body, { new : true
           
       });
   res.send(getuser)
 
    }catch(e){
      res.status(500).send(e)
    }
})

router.delete("/user/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getuser = await User.findByIdAndDelete(req.params.id);
   res.send(getuser)
 
    }catch(e){
      res.status(500).send(e)
    }
})

module.exports = router;












