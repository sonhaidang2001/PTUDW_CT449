const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

async function connect() {
    try {
        await mongoose.connect(process.env.URL_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };