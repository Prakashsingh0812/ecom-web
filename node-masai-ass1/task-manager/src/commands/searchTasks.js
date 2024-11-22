const fs = require('fs');
const path = require('path');

const tasksFile = path.join(__dirname, '../../data/tasks.json');

function searchTasks(query) {
    const tasks = JSON.parse(fs.readFileSync(tasksFile, 'utf-8'));
    const filteredTasks = tasks.filter(task =>
        task.title.includes(query) || task.dueDate.includes(query)
    );

    if (filteredTasks.length === 0) {
        console.log('No matching tasks found.');
        return;
    }

    console.log('Matching Tasks:');
    filteredTasks.forEach(task => {
        console.log(
            `ID: ${task.id}, Title: ${task.title}, Due Date: ${task.dueDate}, Status: ${task.status}`
        );
    });
}

module.exports = searchTasks;
