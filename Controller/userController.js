const User = require('../models/user.js')
const bcrypt = require('bcrypt');
const auth = require('../auth.js')



// ====================== Function for user Registration =================
module.exports.userRegistration = (request, response)=>{
    const input = request.body;


    // this will return null if theres no userName found same with the input userName
    User.findOne({userName: input.userName}) 
    .then(result =>{
        if(result !== null){
            return response.send('The user name is already exist!');
        }
        else{
            let newUser =  new User({
                userName: input.userName,
                password:bcrypt.hashSync(input.password, 10)
            });

            newUser.save()
            .then( ()=>response.send('You are now registered to our website!'))
            .catch(error => response.send(error))
        }
    })
    .catch( error => response.send(error))
}

// ====================== end of Function for user Registration =================




// ====================== Function for user Login ==================================
module.exports.userLogin = (request, response)=>{
    const input = request.body;
   

    User.findOne({userName: input.userName})
    .then(result => {
        if(result === null){
            response.send(`User name ${input.userName} is not yet registered in our website!`)
        }
        else{
            const isPasswordCorrect = bcrypt.compareSync(input.password, result.password)

            if(isPasswordCorrect){
                // This will generate an object {auth: token-code}
                response.send({auth: auth.createAccessToken(result)})
            }
            else{
                response.send(`Password is incorrect!`)
            }
            
        }
    })
    .catch(error=> response.send(error))
}
// ====================== end of Function for user Login ============================

