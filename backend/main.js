require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

let current_value = 0;

if (process.env.NODE_ENV === 'development') {
    app.use(cors());
}

app.get('/api/status', (req, res) => res.send(current_value.toString()));

app.get('/api/update', (req, res) => {
    try {
        const incoming_value = parseInt(req.query.value, 10); 
        if (isNaN(incoming_value)) {
            res.sendStatus(400); 
        } else {
            current_value = incoming_value + current_value;
            res.sendStatus(200); 
        }
    } catch (err) {
        res.sendStatus(500); 
    }
});

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.listen(port, host, () => 
    console.log(`Listening at http://${host}:${port}`)
);
