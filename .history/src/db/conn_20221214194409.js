const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/atmDB",{ 
    // useCreateIndex:true,
    useNewUrlParser:true
    // useUnifiedTopology:true

}).then(()=> {
    console.log("Connected Successfully");
}).catch((error) =>{
    console.log(error);
})