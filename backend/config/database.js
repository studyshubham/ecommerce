const mongoose = require("mongoose");

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
}

module.exports = connectDatabase

// const connectDatabase = ()=>{
//     mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
//     .then((data)=> 
//     {console.log(`connection was susscifully :${data.connect.host}`);
//     })
//     .catch((err)=>{
//     console.log(err); 
//     }); 
// }

// module.exports = connectDatabase;
