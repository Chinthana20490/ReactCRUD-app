const express = require("express");
const router = express.Router();

// insert model
const User = require("../Model/UserModel");

//insert user controler
const UserControler = require("../Controlers/UserControlers");

//create route path
router.get("/",UserControler.getAllUsers);
router.post("/",UserControler.addUsers);
router.get("/:id",UserControler.getUserById);
router.put("/:id",UserControler.updateuserdetails);
router.delete("/:id",UserControler.deleteUserdetails);

//export
module.exports = router;

