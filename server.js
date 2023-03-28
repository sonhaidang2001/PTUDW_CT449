const express = require('express');
const cors = require('cors');
const app = express();
const contactRouter = require('./app/routes/contac.route')


// port
require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api/contacts',contactRouter)

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);

