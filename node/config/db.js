const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
   .then(()=>(console.log("CONNECTED TO MONGODB")))
   .catch((err)=>(console.log(err.message)))