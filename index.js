const express = require("express");
const path = require("path");
const fs = require("fs");
const nodemon = require("nodemon");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/img', express.img('img')) // For serving static files
app.use(express.urlencoded())
    // PUG SPECIFIC STUFF
    // app.set('view engine', 'pug') // Set the template engine as pug
    // app.set('img', path.join(__dirname, 'img')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely"
    const params = { 'title': 'PubG is the best game', "content": con }
    res.status(200).render('index.html', params);
})
app.post('/', (req, res) => {
    naam = req.body.name;
    email = req.body.email;
    phone = req.body.phone;
    message = req.body.message;

    let outputTowrite = `${naam}, ${email}, ${phone}, ${message}`
    fs.writeFileSync('output.txt', outputTowrite)
    const params = { 'message': 'Form submitted successfully' }
    res.status(200).render('index.pug', params);

})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});