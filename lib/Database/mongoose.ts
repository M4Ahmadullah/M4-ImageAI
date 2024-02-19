import mongoose, { Mongoose } from 'mongoose'


const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}


// this caching is for fast connection to the database. as the Next js is a server less platform so each and every time it should
// start a new connection to the database. so for this reason this is good to have a cached connection to be fast. 

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
    cached = (global as any).mongoose = {
        conn: null, promise: null, 
    }
}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

    cached.promise = cached.promise || 
    mongoose.connect(MONGODB_URL, {
        dbName: 'M4-ImageAI', bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn;
}