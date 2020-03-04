const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create blend schema and model

const BlendSchema = new Schema ({
    name :{
        type: String,
        required:[true, "Name field is required"]
    },
    ingredients :{
        type: String,
        required: [true, "Ingredient field is required"]
    },
    price :{
    },
    image: {}


});


//Setting up the model
const Blend = mongoose.model('blend', BlendSchema);


module.exports = Blend; 

