import mongoose from 'mongoose';

async function connectMongoDb(url = "mongodb://127.0.0.1:27017/mahmud"){
    return mongoose.connect(url);
}

export default connectMongoDb;