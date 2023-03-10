const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-errors');

const getAllTasks = asyncWrapper( async (req, res) => {
        const alltasks = await Task.find();
        res.status(200).send(alltasks);
    }
);

const createTask = asyncWrapper( async (req, res) => {
    const task = await Task.create(req.body);
    res.status(200).json(task);
});

const updateTask = asyncWrapper( async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json(task);
});

const getTask = asyncWrapper( async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id: taskID});
    if(!task) {
        return next(createCustomError('No Task Found with this ID', 404));
    }
        
    res.status(200).json(task);
});

const deleteTask = asyncWrapper( async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete( {_id: taskID });
    if(!task) 
        return next(createCustomError('No Task Found with this ID', 404));
    res.status(200).json({ msg: 'Task Deleted Successfully!',data: task });
});

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    getTask,
    deleteTask
}