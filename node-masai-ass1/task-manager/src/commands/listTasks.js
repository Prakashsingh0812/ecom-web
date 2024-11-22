const fs = require('fs');
const path = require('path');

const tasksFile = path.join(__dirname, '../../data/tasks.json');

function listTasks() {
    const tasks = JSON.parse(fs.readFileSync(tasksFile, 'utf-8'));
    if (tasks.length === 0) {
        console.log('No tasks found.');
        return;
    }

    console.log('Task List:');
    tasks.forEach(task => {
        console.log(
            `ID: ${task.id}, Title: ${task.title}, Due Date: ${task.dueDate}, Status: ${task.status}`
        );
    });
}

module.exports = listTasks;
