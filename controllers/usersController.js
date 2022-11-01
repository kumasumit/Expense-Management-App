const { response } = require("express");
const usersModal = require("../models/usersModal");

//login Action-Callback
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usersModal.findOne({ email });

    // Case 1: If no user is found for entered email address
    if (!user) {
      //   if no user is found corresponding to that email address
      return res.status(404).json({ msg: "User not found" });
      //404 is not found status code
    }

    // Case 2: if user is found corresponding to that email address,and passwords dont match
    //if user is found corresponding to that email address
    //compare passwords entered by user and the password saved in the database
    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        msg: "Passwords does not match" });
      //401 is Unauthorized response code
    }

    // Case 3: if user is found corresponding to that email address,and passwords match
    res.status(200).json({
      success:true,
      msg: "User logged in successfully",
      user,
    });
    //200 is Successful response code, here we return the user object
  } catch (error) {
    return res.status(500).json({
      success: false, 
      msg: error 
    });
    // 500 is internal server error code

  }
};
//register-SignUp Action-Callback

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await usersModal.findOne({ email });
    // Case 1: If user is found for entered email address
    //means the email is already registered and is not unique
    if (user) {
      return res.status(400).json({ success: false, msg: "Email already exists" });
      //400 is bad client request
    }

    // Case 2: If user is not found for entered email address
    //means the email is not already registered and is unique
    const newUser = new usersModal({ name, email, password });
    await newUser.save();
    res.status(201).json({ msg: "User created successfully", newUser });
    //201 is Created success status response code
    //here we return the new created user object
  }catch (error) {
  return res.status(500).json({ success: false,msg: error });
  // 500 is server error

}
};

module.exports = { loginUser, registerUser };
