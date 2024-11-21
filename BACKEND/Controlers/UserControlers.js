const User = require("../Model/UserModel"); 


//data display part
const getAllUsers = async (req, res, next) => {

    let users;

    // get all users
    try{
        users = await User.find();
    } catch (err){
        console.log(err);
    }

    //if users are not found
    if(!users){
        return res.status(404).json({message:"Users are not found!!"}); 
    }

    //display all users
    return res.status(200).json({users})
};




//data insert part
const addUsers = async (req, res, next) => {

    const {name, gmail, age, address} = req.body;

    let insertUser;

    try {
        insertUser = new User({name, gmail, age, address});
        await insertUser.save();
    } catch (error) {
        console.log(error);
    }
    //if users data are not iserted
    if(!insertUser){
        return res.status(404).json({message:"Users are not iserted!!"}); 
    }
    return res.status(200).json({insertUser}); 
};





//get each users by using id after 
const getUserById = async (req, res, next) => {

    const id = req.params.id;

    let user;

    try {
        user = await User.findById(id);
    } catch (error) {
        console.log(error)
    }

    //if user data is not display
    if(!user){
        return res.status(404).json({message:"User data can't be display!!"}); 
    }
    return res.status(200).json({user}); 
};




//update user details part
const updateuserdetails = async (req, res, next) => {

    const id = req.params.id;
    const {name, gmail, age, address} = req.body;

    let updateUser;

    try {
        updateUser = await User.findByIdAndUpdate(id, {name:name, gmail:gmail, age:age, address:address});
        updateUser = await User.save();
    } catch (error) {
        console.log(error);
    }

     //if user details are not updated
     if(!updateUser){
        return res.status(404).json({message:"User details are can't be update!!"}); 
    }
    return res.status(200).json({updateUser}); 

};





//delete user details part
const deleteUserdetails = async (req, res, next) => {

    const id = req.params.id;

    let deleteUser;

    try {
        deleteUser = await User.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }

    //if user details are not deleted
    if(!deleteUser){
        return res.status(404).json({message:"User details are can't be deleted!!"}); 
    }
    return res.status(200).json({deleteUser}); 
};




exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getUserById = getUserById;
exports.updateuserdetails = updateuserdetails;
exports.deleteUserdetails = deleteUserdetails;


