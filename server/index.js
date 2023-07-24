const express = require("express");
require("./Config");
const cors = require("cors"); //iske bina kam nahi kar raha
const app = express();

app.use(cors()); //It is typically used for processing HTML form submissions or when the data is sent in a URL-encoded format.
app.use(express.json());

const Producct = require("./ModelSchema"); //importing model and schema
//When submitting an HTML form, the data is typically sent in the request body using the application/x-www-form-urlencoded format. This format is the default enctype for HTML forms.
app.get('/',(req,res)=>{
  res.status(200).send('Status Good')
})
app.post("/posst", async (req, res) => {

  
  let data = new Producct(req.body);
  let result = await data.save();

  res.send(result);
});

app.listen((4000),()=>{
  console.log('Connected');
})
