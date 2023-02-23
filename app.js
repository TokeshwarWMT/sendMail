const express = require('express');
const app = express();
const sendMail = require('./sendMail')

app.get('/', (req, res) => {
    res.send('Welcome to sendgrid')
});

app.get('/sendMail', sendMail)

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});