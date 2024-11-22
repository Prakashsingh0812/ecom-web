const readline = require('readline');
const addTask = require('./commands/addTask');
const listTasks = require('./commands/listTasks');
const completeTask = require('./commands/completeTask');
const updateTask = require('./commands/updateTask');
const deleteTask = require('./commands/deleteTask');
const searchTasks = require('./commands/searchTasks');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showHelp() {
    console.log('Available Commands:');
    console.log('1. add-task <title> <dueDate> - Add a new task');
    console.log('2. list-tasks - List all tasks');
    console.log('3. complete-task <id> - Mark a task as completed');
    console.log('4. update-task <id> <newTitle> <newDueDate> - Update a task');
    console.log('5. delete-task <id> - Delete a task');
    console.log('6. search-tasks <query> - Search tasks by title or due date');
    console.log('7. help - Show this help message');
    console.log('8. exit - Exit the application');
}

console.log('Welcome to Enhanced Task Manager!');
showHelp();

function promptUser() {
    rl.question('Enter a command: ', input => {
        const [command, ...args] = input.split(' ');

        switch (command) {
            case 'add-task':
                addTask(args[0], args[1]);
                break;
            case 'list-tasks':
                listTasks();
                break;
            case 'complete-task':
                completeTask(args[0]);
                break;
            case 'update-task':
                updateTask(args[0], args[1], args[2]);
                break;
            case 'delete-task':
                deleteTask(args[0]);
                break;
            case 'search-tasks':
                searchTasks(args.join(' '));
                break;
            case 'help':
                showHelp();
                break;
            case 'exit':
                console.log('Goodbye!');
                rl.close();
                return;
            default:
                console.log('Invalid command. Type "help" for a list of commands.');
        }

        promptUser();
    });
}

promptUser();
