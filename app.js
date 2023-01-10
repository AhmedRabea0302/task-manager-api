const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasks');

const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');

require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(express.static('./public'));

// Routes
app.get('/', (req, res) => {
    res.send('HEloo ');
});

app.use('/api/v1/tasks', tasksRoutes);

app.use(notFound)

const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => { console.log(`Server Is Listining on port ${port}`); });
    } catch (error) {
        console.log(error);
    }
}

start();