const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// ######### handling uncaught Exception #############
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`sutting down the server due to handling uncaught Exception `)  
    process.exit(1);
});

// Config

dotenv.config({path:"backend/config/config.env"});

//Connecting to Database
connectDatabase();

const server = app.listen(process.env.PORT,() =>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

// ########### unhandled promise Rejaction ###########

process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`sutting down the server due to unhandled promise Rejaction `)
    server.close(()=>{
        process.exit(1)
    });
});