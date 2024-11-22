const fs = require('fs');
const path = require('path');

const tasksFile = path.join(__dirname, '../../data/tasks.json');

function addTask(title, dueDate) {
    if (!title || !dueDate) {
        console.log('Error: Task title and due date are required!');
        return;
    }

    const tasks = JSON.parse(fs.readFileSync(tasksFile, 'utf-8'));
    const newTask = {
        id: tasks.length + 1,
        title,
        dueDate,
        status: 'pending'
    };

    tasks.push(newTask);
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));

    console.log(`Task added successfully: ${title}`);
}

module.exports = addTask;
