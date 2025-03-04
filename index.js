const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

let messages = []; // Store messages in-memory (use a database in production)

// Route to get all messages
app.get("/messages", (req, res) => {
    res.json(messages);
});

// Route to send a new message
app.post("/api/messages", (req, res) => {
    const { message } = req.body;
    const response = `Hello, how can I help you today? You said: "${message}"`;
    
    res.status(201).json({ response });
});

app.listen(port, () => {
    console.log(`Chat server running on http://localhost:${port}`);
});
