const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes/index');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// const logger = (req, res, next) => {
//     console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
//     next();
// };

// init middleware
// app.use(logger);


// sets static folder
app.use(express.static('public'));

app.use("/api", apiRoutes);

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));