const getAllTasks = (req, res) => {
    res.status(200).send('All tasks');
}

const createTask = (req, res) => {
    res.status(201).send('Created');
};

const updateTask = (req, res) => {
    res.status(200).send('Updated');
};

const getTask = (req, res) => {
    res.status(200).send('Task 1');
};

const deleteTask = (req, res) => {
    res.status(200).send('Deleted');
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    getTask,
    deleteTask
}