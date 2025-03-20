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

app.get('/api/projects', async (req,res) => {
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


//LEFT OFF WEDNESDAY WORKING ON Deleting tasks
app.patch('/projects/:id', async (req,res) => {
  const { id } = req.params;  
  const { person_assigned } = req.body;
    try {
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('projects');
          

        const updatedProject = await collection.updateOne(
            { _id: new ObjectId(id) },  
            { 
                $pull: { 
                  //  tasks: { person_assigned: person_assigned } 
                    "person_assigned": "John Doe" 
                }
            }
        );
        console.log(id);
        // if (updatedProject.modifiedCount === 0) {
        //     return res.status(404).send('Project not found or task not found');
        // }

        res.json(updatedProject);  // Return updated project
    } 
    catch (err) {
            console.error('Error:', err);
            res.status(500).send('Error deleting task');
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

  app.get('/api/projects/:id', async (req, res) => {
    console.log('in get project by id route')

    const { id } = req.params;  
    try{
      const client = await MongoClient.connect(MONGO_DB_URL);
      const db = client.db(MONGO_DB);
      const collection = db.collection('projects');
      const project = await collection.findOne({_id: new ObjectId(id)})
      res.json(project);
    } catch (err) {
        console.error('Error: ', err);
        res.status(500).send("Error getting project");
    }
});


app.patch('/api/tasks/iscompleted', async (req,res) => {
    
  const { id, is_completed } = req.body;
  // console.log(taskInfo);
    try {
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('projects');
        const tasks = await collection.updateOne({"tasks.task_id": id}, {$set:{"is_completed": is_completed}})
         console.log(tasks) 
        
        // if (updatedProject.modifiedCount === 0) {
        //     return res.status(404).send('Project not found or task not found');
        // }

        // res.json(updatedProject);  // Return updated project
    } 
    catch (err) {
            console.error('Error:', err);
            res.status(500).send('Error patching is complete task');
        }
})


app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`);});

