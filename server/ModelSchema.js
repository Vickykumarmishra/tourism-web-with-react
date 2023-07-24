const mongoose= require('mongoose');
const VasuSchema= mongoose.Schema({
    name:String,
    email:String,
    addrs:String
});

module.exports=mongoose.model('details',VasuSchema);

