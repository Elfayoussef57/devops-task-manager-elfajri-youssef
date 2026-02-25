const express = require('express');
const app = express();
app.use(express.json());

<<<<<<< HEAD
let tasks = [
  { id: 1, title: "Initial task", completed: true },
  { id: 2, title: "Install Git and Node.js", "completed": true },
  { id: 2, title: "Learn DevOps basics", completed: false }

];
=======
const tasksRouter = require('./routes/tasks');

>>>>>>> bffd7c47f80c6f5774fa76964fa87ecfbc847d41

app.get('/', (req, res) => {
res.json({ message: "Welcome from FEATURE branch" });
});

app.use('/tasks', tasksRouter);

app.listen(3000, ()=> console.log("API running on port 3000"));
