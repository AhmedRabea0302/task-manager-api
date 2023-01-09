require('./db/connect')
const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasks');

const path = require('path');

// Middlewares
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '/public')));

// Routes
app.get('/', (req, res) => {
    res.send('HEloo ');
});

app.use('/api/v1/tasks', tasksRoutes);

const port = 3000;
app.listen(port, () => { console.log(`Server Is Listining on port ${port}`); });