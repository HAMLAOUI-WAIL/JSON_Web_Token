// check username, password in post(login) request
// if exist create new JWT(Json We Token)
// send back to fron-end
// setup authentication so only the request with JWT can access the dasboard

import CustomAPIError from './../errors/custom-error.js';

export const login = async (req,res)=>{
    const {username,password} = req.body
    
    if(!username || !password){
        throw new CustomAPIError('Please Provide Username and Password',400)
    }

    console.log(`username = ${username} & password = ${password} `)

    res.send("Fake Login \n")
}

export const dashboard = (req,res)=>{
    const Number = Math.floor(Math.random()*100)
    res.status(200).json({message:"Hello !",secret:` your secret Number is ${Number}`})
}