import 'dotenv/config';
import mongoose from "mongoose";
import CONFIG from "./config";

class MongoHelper {
    connectMongoDB = async () => {
          try {
              await mongoose.connect(CONFIG.DB_CONFIG.mongo.URI)
              console.info('MongoDB Connected');
          }
          catch(err){
            console.error("DB Error: ", err);
            process.exit(1);
          }
    }
}

const mongoInstance = new MongoHelper();
export default mongoInstance;