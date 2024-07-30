const request = require('request');

function computeCompletedTasks(apiUrl) {
    request(apiUrl, (error, response, body) => {
        if (error) {
            console.error('Error fetching data:', error);
            return;
        }

        try {
            const tasks = JSON.parse(body);
            const completedTasksByUser = {};

            tasks.forEach((task) => {
                if (task.completed) {
                    const userId = task.userId;
                    completedTasksByUser[userId] = (completedTasksByUser[userId] || 0) + 1;
                }
            });

            // Print users with completed tasks
            Object.keys(completedTasksByUser).forEach((userId) => {
                console.log(`User ${userId} completed ${completedTasksByUser[userId]} tasks.`);
            });
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    });
}

// Example usage:
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
computeCompletedTasks(apiUrl);
