const mongoose= require('mongoose');
const VasuSchema= mongoose.Schema({
    name:String,
    email:String,
    comment:String
});

module.exports=mongoose.model('details',VasuSchema);

