import express, { Request, Response } from 'express';
import User from '../model/User';
import bcrypt from 'bcrypt';
const router = express.Router();

// Get User
router.get('/:id', async (req: Request, res: Response)=>{
    try{
        const findUser = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = findUser._doc;

        res.status(200).json(other)
    }catch(err){
        res.status(400).json(err);
    }
})
// Update User
router.put('/Update/:id', async (req: Request, res: Response)=>{
    try{
        if(req.params.id === req.body.userId){
            if(req.body.password){
                try{
                    const salt = await bcrypt.genSalt(10);
                    req.body.password  = await bcrypt.hash(req.body.password, salt)
                }catch(err){
                    res.status(400).json(err)
                }
            }
            try{
                const userUpdate = await User.findByIdAndUpdate(req.params.id, {
                    $set:   req.body
                });
                res.status(200).json(userUpdate)
            }catch(err){
                res.status(400).json(err)
            }
        }else{
            res.status(400).json({msg: "u can't update this account"})
        }
    }catch(err){
        res.status(400).json(err);
    }
})

// Delete User

export default router;