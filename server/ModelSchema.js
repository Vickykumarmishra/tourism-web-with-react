const mongoose= require('mongoose');
const VasuSchema= mongoose.Schema({
    name:String,
    email:String,
    add:String
});

module.exports=mongoose.model('details',VasuSchema);
