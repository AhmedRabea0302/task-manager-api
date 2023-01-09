const getAllTasks = (req, res) => {
    res.status(200).send('All tasks');
}

const createTask = (req, res) => {
    res.status(200).json(req.body);
};

const updateTask = (req, res) => {
    res.status(200).send('Updated');
};

const getTask = (req, res) => {
    res.status(200).json({
        id: req.params.id
    });
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