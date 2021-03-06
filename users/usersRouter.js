var express=require('express');

var usersController=require('./usersController');

var usersRouter=express.Router();
usersRouter.route('/allusers')
     .get(usersController.getusers);
usersRouter.route('/adduser')
    .post(usersController.addUser);
usersRouter.route('/updateprofile')
    .patch(usersController.update_profile)    
usersRouter.route('/findmatch')    
    .post(usersController.findProfile);
usersRouter.route('/changepwd')
     .patch(usersController.patch_changepwd); 
usersRouter.route('/login')        
     .post(usersController.login);
module.exports=usersRouter;