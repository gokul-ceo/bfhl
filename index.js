const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function greatestAlpha(array) {
    let characterCode = [];
    let highest = [];
    array.forEach(element => {
        if (isLetter(element)) {
            characterCode.push(element.charCodeAt());
        }
    });
    if (characterCode.length > 0) {
        let sortedArray = characterCode.sort();
        const max = sortedArray[sortedArray.length - 1];
        const char = String.fromCharCode(max);
        highest.push(char);
    }
    return highest;
}

app.post('/bfhl', (req, res) => {
    try {
        if (!req.body.data || !Array.isArray(req.body.data)) {
            res.status(400).json({ error: 'Invalid request data format' });
            return;
        }

        let numbers = [];
        let alphabets = [];

        const requestBody = req.body.data;

        requestBody.forEach(element => {
            if (isLetter(element)) {
                alphabets.push(element);
            } else  {
                numbers.push(element);
            }
        });

        const highest = greatestAlpha(alphabets);

        res.status(200).json({
            is_success: true,
            user_id: 'gokulg_20062003',
            email: 'gg4585@srmist.edu.in',
            roll_number: 'RA2011050010019',
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: highest,
        });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});
