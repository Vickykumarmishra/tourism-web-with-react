const mongoose=require('mongoose');
const MONGO_URI='mongodb+srv://mishravicky0141:t6QV59kW7uUMFpzh@cluster0.vizd2yg.mongodb.net/visitor'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(MONGO_URI);
