var User=require('./userModel');

// add user

var addUser=function (req,res) {
    var user=new User(req.body);
    user.save(function (err) {
        if(err){
            res.send('cannot reqister')
        }else{
            res.send(user)
        }
    });
};

// get allusers

var getusers=function(req,res){
    User.find(function(err,users){
        if(err){
            res.send('cannot get users')
        }else{
            res.send(users);
        }
    })
}

// forgot password

var findProfile=function(req,res){
    var email={
        email:req.body.email
    }
    console.log(email)
    User.find(email,function (err,user) {

        if(err){

            res.send('err')
        }else {
            res.send(user);
            console.log(user);
        }
    });
};

// find profile for login

var login=function(req,res){
    var login_id={
        email:req.body.email,
        password:req.body.password
    }
    console.log(login_id)
    User.find(login_id,function (err,user) {

        if(err){
            res.send('err')
        }else {
            res.send(user);
            console.log(user);
        }
    });
};

// change password (patch) method

var patch_changepwd = function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    var currentpass=req.body.currentpass;
    User.findOne({email},function(err, user){
        if(err){
            res.status(404).send('No user found')
        }else{
            if(user.password==currentpass){
                user.password=password;
                user.save(function(err,user){
                    if(err){
                        res.send('Update failed')
                    }else{
                        res.send(user)
                    }
                })
            }else{
                res.send('current password is wrongs')
            }
        }
    })
  }




module.exports={
    addUser:addUser,
    findProfile:findProfile,
    login:login,
    patch_changepwd:patch_changepwd,
    getusers:getusers
}
