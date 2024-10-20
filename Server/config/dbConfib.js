const mongoose = require('mongoose');


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

const db = mongoose.connection;

module.exports = db;
