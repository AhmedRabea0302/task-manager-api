const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const alltasks = await Task.find();
        res.status(200).send(alltasks);
    } catch (error) { 
        res.status(500).send({ msg: error });
    }
}

const createTask = async (req, res) => {
   try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
   } catch (error) {
    res.status(500).json({ msg: error });
   }
};

const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const getTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOne({_id: taskID});
        if(!task) 
            return res.status(404).json({msg: `Task not found with this id: ${taskID}`});
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: 'Something wrong with the serve' });
    }

};

const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete( {_id: taskID });
        if(!task) 
            return res.status(404).json({msg: `Task not found with this id: ${taskID}`});
        res.status(200).json({ msg: 'Task Deleted Successfully!',data: task });
    } catch (error) {
        res.status(500).json({ msg: 'Something wrong with the serve' });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    getTask,
    deleteTask
}