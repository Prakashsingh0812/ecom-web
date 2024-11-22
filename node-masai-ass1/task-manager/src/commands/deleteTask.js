const fs = require('fs');
const path = require('path');

const tasksFile = path.join(__dirname, '../../data/tasks.json');

function deleteTask(taskId) {
    let tasks = JSON.parse(fs.readFileSync(tasksFile, 'utf-8'));
    const taskIndex = tasks.findIndex(t => t.id === parseInt(taskId));

    if (taskIndex === -1) {
        console.log('Error: Task not found!');
        return;
    }

    const deletedTask = tasks.splice(taskIndex, 1);
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
    console.log(`Task "${deletedTask[0].title}" deleted successfully.`);
}

module.exports = deleteTask;
