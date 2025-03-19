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


// //joshua adding auth/login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).send('Username and password are required');
    }
  
    try {
      const client = await MongoClient.connect(MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = client.db(MONGO_DB);
      const collection = db.collection('login'); 
      const user = await collection.findOne({ username });
      if (!user) {
        client.close();
        return res.status(400).send('User not found');
      }
      if (user.password !== password) {
        client.close(); 
        return res.status(400).send('Invalid Password');
      }
      client.close(); 
      res.status(200).send('Login successful');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });





app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`);});

