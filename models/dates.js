const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create blend schema and model

const DeadlineSchema = new Schema ({
    date :{
        type: String,
        required:[true, "Date is required"]
    }


});


//Setting up the model
const Deadline = mongoose.model('deadline', DeadlineSchema);

module.exports = Deadline; 