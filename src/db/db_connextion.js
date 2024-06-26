

const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect("mongodb+srv://radadiyamk6:7HRuWsHyjp7QNJ6y@cluster0.mrighl4.mongodb.net/").then((data) => {

        console.log("DB connected");

    }).catch((err) => {
        console.log(err);
    })
}
module.exports = connectDB