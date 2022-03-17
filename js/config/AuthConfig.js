const ensureAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) return next();

    req.flash('error_msg', 'Please log in to view that resource')
    res.redirect('/signin')
}

const forwardAuthenticated = (req, res, next) => {
    if(!req.isAuthenticated()) return next();

    res.redirect('/');      
}

module.exports = {
    ensureAuthenticated,
    forwardAuthenticated
}