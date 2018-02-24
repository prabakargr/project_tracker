var express=require('express');

var usersController=require('./usersController');

var usersRouter=express.Router();

usersRouter.route('/adduser')
    .post(usersController.addUser);
usersRouter.route('/findmatch')    
    .post(usersController.findProfile);
usersRouter.route('/changepwd')
     .patch(usersController.patch_changepwd); 
usersRouter.route('/login')        
     .post(usersController.login);
module.exports=usersRouter;