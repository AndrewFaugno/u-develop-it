const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

// Default response for any other request (Not Found)       (always goes last to not override other routes)
app.use((req, res) => {
    res.status(404).end();
});

// Sets port when opted for server to run
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} at: http://localhost:3001`);
});