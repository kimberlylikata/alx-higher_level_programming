const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

// Function to make the GET request and display the status code
function getStatusCode(url) {
    request(url, (error, response) => {
        if (error) {
            // Print the error if an error occurs
            console.error(error);
        } else {
            // Print the status code
            console.log(`code: ${response.statusCode}`);
        }
    });
}

// Ensure that a URL is provided
if (url) {
    getStatusCode(url);
} else {
    console.error('Please provide a URL as an argument.');
}
