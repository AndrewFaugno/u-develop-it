const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const mysql = require('mysql2');

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        // MySQL password
        password: '',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

db.query(`Select * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// Default response for any other request (Not Found)       (always goes last to not override other routes)
app.use((req, res) => {
    res.status(404).end();
});

// Sets port when opted for server to run
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} at: http://localhost:3001`);
});