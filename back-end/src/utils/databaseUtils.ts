import mongoose from 'mongoose';
import dotenv from 'dotenv';



dotenv.config();

const initialDatabase = () => {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
        throw new Error("MONGO_URL is not defined in the environment variables");
    }

    mongoose.connect(mongoUrl as string)
  .then(() => console.log('Successfully Connected to MongoDB'))
  .catch((error) =>  console.error('Error connecting to MongoDB:', error));
}

export default initialDatabase;