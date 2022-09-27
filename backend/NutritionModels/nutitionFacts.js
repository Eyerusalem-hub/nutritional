const mongo = require('mongoose')

const facts = new mongo.Schema({
    Gender: {
        type: String
    },
    Age: {
        type: Number
    },
    Thiamin: {
        type: Number
    },
    Riboflovin: {
        type: Number
    },
    Niacin: {
        type: Number
    },
    Biotin: {
        type: Number
    },
    PanthotenicAcid: {
        type: Number
    },
    Vitamin6: {
        type: Number
    },
    Folate: {
        type: Number
    },
    VitaminB12: {
        type: Number
    },
    Choline: {
        type: Number
    },
    VitaminC: {
        type: Number
    },
    VitaminA: {
        type: Number
    },
    VitaminD: {
        type: Number
    },
    VitaminE: {
        type: Number
    },
    VitaminK: {
        type: Number
    },
})

const nutitionModel = mongo.model("nutritionByAge", facts)
module.exports = nutitionModel;