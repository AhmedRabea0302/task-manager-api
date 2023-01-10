const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasks');

const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(express.static('./public'));

// Routes
app.get('/', (req, res) => {
    res.send('HEloo ');
});

app.use('/api/v1/tasks', tasksRoutes);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => { console.log(`Server Is Listining on port ${port}`); });
    } catch (error) {
        console.log(error);
    }
}

start();