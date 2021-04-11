const express = require('express');
const path = require('path');
const app = express();
const notes = require("./db/db.json");
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
console.log(notes);

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
};

// init middleware
app.use(logger);

// gets all notes
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// sets static folder
app.use(express.static('public'));

// Use apiRoutes
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));