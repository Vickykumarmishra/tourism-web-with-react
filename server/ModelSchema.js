const mongoose= require('mongoose');
const VasuSchema= mongoose.Schema({
    name:String,
    email:String,
    address:String
});

module.exports=mongoose.model('details',VasuSchema);

