// server.js
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app'); 
const dpconfig=require('./config/dbConfib');
const port = process.env.PORT_NUM 


// Start the server
app.listen(port, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
        process.exit(1); 
    }
    console.log(`App started on port: ${port}`);
})