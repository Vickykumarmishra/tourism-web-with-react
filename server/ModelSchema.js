const mongoose= require('mongoose');
const PrithviSchema= mongoose.Schema({
    name:String,
    email:String,
    passw:String
});

module.exports=mongoose.model('users',PrithviSchema);