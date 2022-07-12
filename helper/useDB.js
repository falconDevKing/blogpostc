import { MongoClient } from "mongodb";

const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@emmanuellearn.2fofu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

const dbName = process.env.MONGO_DB;

const useDB = async (collectionName) => {
  // Use connect method to connect to the server
  try {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    return { collection, client };
  } catch (error) {
    throw new Error("Connecing to DataBase failed");
  }
};

export default useDB;
