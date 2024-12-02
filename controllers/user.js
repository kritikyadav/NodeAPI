/**
 * This Controler file will contain all the action related content like function codes for performing any action. 
 * 
 */

// after this push we will start a project therefor creating new branch. 

// import User here for performing db related actions. 
import { User } from "../models/user.js";

// function to get all user details
export const getAllUsers = async (req, res) => {

    const user = await User.find({});

    res.json({
        success: 'true',
        user,
    })
}

// function to register user. Data inserted in db. Using post to fetch data from req.body.
export const register =  async (req, res) => {

    // for accessing req.body need to use middleware.
    const { name, email, password } = req.body;
    // check what values arrived from req.body 
        console.log(req.body); 
        
    await User.create({
        name, email, password
    });

    // status 201 = created. 
    res.status(201).cookie("temp","created").json({
        success: "Data created success.",
    })
}

// function to get user info by passing id in get menthod in url after ? .  
export const get_userinfo_querystring_method_id = async (req, res) => {

    // req.query is used to get params from url. Ex: id.
    // http://localhost:4000/userid?id=6672b3f1b67b95f6aafc531f
    const {id} = req.query;
    const user = await User.findById(id);
    res.json({
        success: 'true',
        user,
    })
}

// function to get user info by passing id in get menthod in url after /:id .  
export const get_userinfo_getmethod_id =  async (req, res) => {
    // you can also pass /userid/kritik
    //                   /userid/paras. 
    console.log(req.params)

    const {id} = req.params;
    const user = await User.findById(id);
    res.json({
        success: 'true',
        user,
    })
}

export const updateUser =  async (req, res) => {
    // you can also pass /userid/kritik
    //                   /userid/paras. 
    console.log(req.params)

    const {id} = req.params;
    // const user = await User.updateOne(id);
    res.json({
        success: 'true',
        user: id,
        message: "updated",
    })
}

export const deleteUser =  async (req, res) => {
    // you can also pass /userid/kritik
    //                   /userid/paras. 
    console.log(req.params)

    const {id} = req.params;
    // const user = await User.deleteOne(id);
    res.json({
        success: 'true',
        user: id,
        message: "deleted",
    })
}
