


const mongo=require("mongoose");





require("dotenv").config();





const my_connect=mongo.connect(process.env.my_mongodb_link);






module.exports={my_connect};