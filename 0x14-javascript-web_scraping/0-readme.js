const fs = require('fs');
const path = require('path');

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Function to read and print the file content
function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Print the error object if an error occurs
            console.error(err);
        } else {
            // Print the content of the file if no error occurs
            console.log(data);
        }
    });
}

// Ensure that a file path was provided
if (filePath) {
    readFile(filePath);
} else {
    console.error('Please provide a file path as an argument.');
}
