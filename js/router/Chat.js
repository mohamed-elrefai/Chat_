const router = require('express').Router(),
      {ensureAuthenticated,forwardAuthenticated} = require('../config/AuthConfig'),
      msg = require('../model/msg'),
      User = require('../model/User');

// HomePage
router.get('/',ensureAuthenticated, (req, res)=>{
    msg.find()
        .then(result => {
            res.render('Pages/chat',  {user: req.user, result})
        })
})

router.post('/postChat', ensureAuthenticated, async (req, res)=>{
    const sender = req.body.sender;
    const message = req.body.message;
    const memberFname = req.body.sender_fname
    const memberLname = req.body.sender_fname    
    const memberImg = req.body.sender_img
    
    try{
        const newMsg = await msg({sender,message, memberFname, memberFname, memberImg});
        const saveMsg = await newMsg.save();
        res.status(200).redirect('/')
    }catch(err){
        console.log(err);
    }
    console.log(sender)
})

module.exports = router