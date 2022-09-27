const monogo = require('mongoose')
const connectDB =() =>  {
    monogo.connect("mongodb+srv://sarem:Eyug21161912@nutrition.n3hdppv.mongodb.net/?retryWrites=true&w=majority")
    .then(() =>{
    console.log("connected successfully")
    })
     // else
    .catch((err) => {
        console.log({"Error": err})

    })
}
module.exports= connectDB;

