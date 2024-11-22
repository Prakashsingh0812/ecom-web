const fs = require('fs');
const path = require('path');

const tasksFile = path.join(__dirname, '../../data/tasks.json');

function completeTask(taskId) {
    const tasks = JSON.parse(fs.readFileSync(tasksFile, 'utf-8'));
    const task = tasks.find(t => t.id === parseInt(taskId));

    if (!task) {
        console.log('Error: Task not found!');
        return;
    }

    task.status = 'completed';
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));

    console.log(`Task "${task.title}" marked as completed.`);
}

module.exports = completeTask;
