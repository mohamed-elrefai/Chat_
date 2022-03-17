const router = require('express').Router(),
      {ensureAuthenticated,forwardAuthenticated} = require('../config/AuthConfig'),
      msg = require('../model/msg'),
      User = require('../model/User');

// HomePage
router.get('/',ensureAuthenticated, (req, res)=>{
    User.find()
        .then(result => {
            res.render('Pages/user',  {user: req.user, result})
        })
})
// Get chat page
router.get('/chat/:id',ensureAuthenticated, (req, res)=>{
    
    res.render('Pages/chat',  {user: req.user})

})


router.post('/postChat', ensureAuthenticated, async (req, res)=>{
    const incomming_id = req.body.incomming_id;
    console.log(incomming_id)
})

module.exports = router