const mongoose= require('mongoose');
const PrithviSchema= mongoose.Schema({
    name:String,
    email:String,
    add:String
});

module.exports=mongoose.model('users',PrithviSchema);