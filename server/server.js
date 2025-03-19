import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const MONGO_DB_URL = 'mongodb://localhost:27017';
const MONGO_DB = 'capstone';
//const collection = 'projects'

app.get('/', async (req,res) => {
    try{
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('projects');
        const projects = await collection.find({}).toArray();
        res.json(projects);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Get Did Not Work")
    }
})






app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`);});

