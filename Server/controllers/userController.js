const router = require('express').Router();
const authmiddleware=require('./../Middlewares/authMiddleware');
const User = require('./../models/user');
router.get('/get-logged-user',authmiddleware,async(req,res)=>{
    try{
        const user=await User.findOne({_id:req.body.userId})
        res.send({
            message:'user fetch successfully',
            success:true,
            data:user
        })  
    }
    catch(error){
        res.status(400).send({
            message:error.message,
            success:false
        })
    }
    
})

router.get('/get-all-users', authmiddleware, async (req, res) => {
    try {
       
      const userId=  req.body.userId;
        const allUsers = await User.find({ _id: { $ne:userId } });
        res.send({
            message: 'users fetched successfully', 
            success: true,
            data: allUsers
        });

    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
});

module.exports=router;