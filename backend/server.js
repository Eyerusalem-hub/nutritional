// dependencies
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('path');
const cors = require('cors');
//const { request } = require('http');
require('dotenv');
const db = require("./mongoDb")
const nutitionModel = require('./NutritionModels/nutitionFacts');
db();

app.use(cors({
    origin: "*"
}))
// allows the server to use or send json objects
app.use(express.json())

//server frontend
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'build', 'index.html')))
}
else {
    app.get('/', (req, res) => res.send('Please set to production'))
}



// retrives data from the frontend
app.post('/*', (req, res) => {

    // call the function by the url

    console.log(req.url)

    var UserAge = req.body.age;
    var userGender = req.body.gender;

    switch (req.url) {
        case "/insert":
            insertFact(UserAge, userGender);
            break;
        case "/read":
            readFact();
            break;
        case "/delete":
            deleteFact();
            break;
        case "/update":
            UpdateFact();
            break;
        default:
            break;

    }
    // SEND BACK TO FRONTEND
    res.send("success");
})

const insertFact = async (age, gender) => {
    console.log("called insert")

    const nutritionFact = new nutitionModel({
        Age: age,
        Gender: gender

    });

    try {
        //save to the database
        await nutritionFact.save();
        //only run if successful
        console.log("Successfully inserted a data", nutritionFact)
    } // give me error
    catch (error) {
        console.log(error)
    }


}

function readFact() {
    console.log("called read")
}
function deleteFact() {
    console.log("called delete")
}
function UpdateFact() {
    console.log("called update")
}

const PORT = process.env.PORT || 3001;

// actually listens to that port, then starts a function

app.listen(PORT, () => {
    //prints the console after the function is called
    console.log(`Is running on port ${PORT}`)

})



