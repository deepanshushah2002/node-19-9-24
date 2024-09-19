const mongoose = require('mongoose');

async function connection() {
    try {
        await mongoose.connect(`mongodb://localhost:27017/batch-3`);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = connection;