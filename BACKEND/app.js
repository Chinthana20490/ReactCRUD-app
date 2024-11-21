// userName chinthanalakmal91
// password wxTpJRW2RB7cMKzq
// mongodb+srv://admin:wxTpJRW2RB7cMKzq@clusterreactproject.1qjxi.mongodb.net/ClusterReactProject

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoute");

const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());
app.use("/users",router);


// mongose connection
mongoose.connect("mongodb+srv://admin:wxTpJRW2RB7cMKzq@clusterreactproject.1qjxi.mongodb.net/?retryWrites=true&w=majority&appName=ClusterReactProject")
.then(()=> {
    console.log("Connected to the Mongodb");
    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });
})
.catch((err)=> console.log((err)));



