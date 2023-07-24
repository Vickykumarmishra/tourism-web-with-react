const mongoose=require('mongoose');
const MONGO_URI='mongodb+srv://mishravicky0141:6HXVUMovOaehWCZY@cluster0.vizd2yg.mongodb.net/visitor'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(MONGO_URI);