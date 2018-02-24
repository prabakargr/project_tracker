var express=require('express');

var projectsController=require('./projectsController');

var projectsRouter=express.Router();


projectsRouter.route('/projectlists')
    .get(projectsController.get);
projectsRouter.route('/addproject')
    .post(projectsController.add_project);  
projectsRouter.route('/projectupdate')
    .patch(projectsController.update_project);      



module.exports=projectsRouter;
