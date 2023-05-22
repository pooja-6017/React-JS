const mongoose = require("mongoose");

module.exports = () =>{
    const connectioParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.DB, connectioParams)
        console.log("connected to database successfully");

    }
    catch(error){
        console.log(error);
        console.log("could not connect to databse!");
    }
}