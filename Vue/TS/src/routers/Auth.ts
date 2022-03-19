import  express, {Request, Response}  from "express";
import User from '../model/User';
import {CreateCookieById, CreateCookieByUsername}  from './JWT';
import bcrypt from 'bcrypt';

const router = express.Router();

// Register
router.post('/Api/signUp', async (req:Request, res:Response) =>{
    try{
        const {username, email} = req.body;
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const password = hashPassword
        // Upload data
        const user = await User.create({username, email, password})

        // make cookie 
        // ID
        const token_id = CreateCookieById(user.id);
        res.cookie('_set', token_id, {httpOnly: true, secure:true})

        // Username
        const token_Username = CreateCookieByUsername(user.username);
        res.cookie('__LUX', token_Username, {httpOnly: true, secure:true})

        // Status 200
        res.status(200).json("Done...!")

    }catch(err){
        res.status(400).json(err)
    }
})

// Login
router.post('/Api/signIn', async (req:Request, res:Response) => {
    try{
        // Get email
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(401).json({msg: 'user not found'})

        // Get password
        const password = await bcrypt.compare(req.body.password, user.password)
        if(!password) return res.status(401).json({msg: "wrong password"})

        res.status(200).json("tmam")
    }catch(err) {
        res.status(400).json(err)
    }
})

export default router;