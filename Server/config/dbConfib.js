const mongoose = require('mongoose');


function dbConnect() {
    mongoose.connect(process.env.conString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("DB Connected successfully, bro!");
        })
        .catch((err) => {
            console.error("DB Connection failed:", err.message);
        });
}

module.exports = dbConnect;
