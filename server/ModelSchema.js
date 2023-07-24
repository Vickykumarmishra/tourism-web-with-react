const mongoose= require('mongoose');
const PrithviSchema= mongoose.Schema({
    name:String,
    email:String,
    addrs:String
});

module.exports=mongoose.model('details',PrithviSchema);