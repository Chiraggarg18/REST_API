const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST endpoint
app.post('/processArray', (req, res) => {
    try {
        const { array } = req.body;

        // Check if the array is provided
        if (!array || !Array.isArray(array)) {
            throw new Error('Array is missing or invalid');
        }

        // Initialize response object
        const response = {
            user_id: "john_doe_17091999", // Replace with your user ID
            is_success: true, // Assume success by default
            email_id: "example@example.com", // Replace with your email ID
            college_roll_number: "12345" // Replace with your college roll number
        };

        // Separate even and odd numbers
        response.even_numbers = array.filter(num => num % 2 === 0);
        response.odd_numbers = array.filter(num => num % 2 !== 0);

        // Convert alphabets to uppercase
        response.uppercase_alphabets = array.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());

        // Send the response
        res.json(response);
    } catch (error) {
        // Handle errors gracefully
        console.error(error);
        res.status(400).json({ is_success: false, error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
