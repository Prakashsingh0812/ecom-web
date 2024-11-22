const fs = require('fs');
const path = require('path');

const tasksFile = path.join(__dirname, '../../data/tasks.json');

function updateTask(taskId, newTitle, newDueDate) {
    const tasks = JSON.parse(fs.readFileSync(tasksFile, 'utf-8'));
    const task = tasks.find(t => t.id === parseInt(taskId));

    if (!task) {
        console.log('Error: Task not found!');
        return;
    }

    if (newTitle) task.title = newTitle;
    if (newDueDate) task.dueDate = newDueDate;

    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
    console.log(`Task "${task.title}" updated successfully.`);
}

module.exports = updateTask;
