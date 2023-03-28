const express = require('express');
const cors = require('cors');
const app = express();


// port
require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Helo everyone');
})

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);

