const express = require('express');
const app = express();
app.use(express.json()); // Enables the Express app to parse incoming JSON requests

let messages = []; // Array to store chat messages
let messageId = 0; // Variable for assigning unique IDs to each message

// Starts the server on port 8080
app.listen(8080, () => {
    console.log('Chat server is running on port 8080...');
});

// Endpoint to GET all chat messages
app.get('/beskeder', (req, res) => {
    res.json(messages); // Sends all messages as a JSON response
});

// Endpoint to GET messages by a specific chat room
app.get('/beskeder/:rum', (req, res) => {
    const room = req.params.rum; // Extracts the chat room name from the URL parameter
    const filteredMessages = messages.filter(msg => msg.rum === room); // Filters messages by the specified room
    res.json(filteredMessages); // Sends filtered messages as a JSON response
});

// Endpoint to GET all unique chat rooms
app.get('/rum', (req, res) => {
    const rooms = [...new Set(messages.map(msg => msg.rum))]; // Creates a set of unique room names from messages
    res.json(rooms); // Sends the unique room names as a JSON response
});

// Endpoint to POST/create a new chat message
app.post('/besked', (req, res) => {
    const { navn, rum, tekst } = req.body; // Extracts the sender's name, room, and text from the request body

    // Checks if all required fields are provided
    if (!navn || !rum || !tekst) {
        return res.status(400).send('All fields are required: navn, rum, tekst');
    }

    // Creates a new message object with a unique ID
    const newMessage = { id: ++messageId, navn, rum, tekst };
    messages.push(newMessage); // Adds the new message to the messages array

    res.status(201).json(newMessage); // Sends the newly created message as a JSON response
});

// Endpoint to DELETE a message by its ID
app.delete('/besked/:nr', (req, res) => {
    const id = parseInt(req.params.nr); // Parses the message ID from the URL parameter
    const index = messages.findIndex(msg => msg.id === id); // Finds the index of the message with the given ID

    // Checks if the message exists
    if (index === -1) {
        return res.status(404).send('Message not found');
    }

    messages.splice(index, 1); // Removes the message from the array

    res.status(200).send('Message deleted'); // Confirms the deletion of the message
});
