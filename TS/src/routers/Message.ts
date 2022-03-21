import express, { Request, Response } from 'express';
import Message from '../model/Message';
const router = express.Router();

// Add message
router.post('/Api/AddMessage', async (req: Request, res: Response) =>{
    try{
        const userId = req.body.userId;
        const GetMessageId = req.body.GetMessageId;
        const message = req.body.message;

        await new Message({
            userId,
            GetMessageId,
            message
        }).save()
            .then(() => {
                res.status(200).json('data is send')
            })
    }catch(err){
        res.status(400).json(err)
    }
})

// Get this massage
router.get('/Api/GetMessageId/:GetMessageId', async (req: Request, res: Response) => {
    try{
        const getMessage = await Message.find(
                {
                    GetMessageId: req.params.GetMessageId
                }
            ).then(() => {
                res.status(200).json(getMessage)
            })
    }catch(err){
        res.status(400).json(err);
    }
})

export default router