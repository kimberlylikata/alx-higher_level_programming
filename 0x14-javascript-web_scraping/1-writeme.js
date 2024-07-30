const fs = require('fs');

// Get the file path and string from the command line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Function to write the string to the file
function writeFile(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            // Print the error object if an error occurs
            console.error(err);
        }
    });
}

// Ensure that both file path and content are provided
if (filePath && content) {
    writeFile(filePath, content);
} else {
    console.error('Please provide both a file path and a string to write as arguments.');
}