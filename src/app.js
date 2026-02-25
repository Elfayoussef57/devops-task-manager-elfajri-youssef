const express = require('express');
const app = express();
app.use(express.json());

const tasksRouter = require('./routes/tasks');

app.get('/', (req, res) => {
  console.log("Testing CI with a Pull Request");
});

app.use('/tasks', tasksRouter);

app.listen(3000, () => console.log("API running on port 3000"));