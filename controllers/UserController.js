const userSchema = require('../model/User');

const register = (req, res) => {
    const userDto = new userSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    });
    userDto.save().then(result=>{
        let responseUserData={
            userEmail:req.email,
            token:'@@@@@',
            status:201,
            message:"success"
        }
        res.status(201).json(responseUserData);
    }).catch(error=>{
        res.status(500).json(error);
    })

    module.exports={register}
}