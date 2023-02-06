const mongoose = require('mongoose');
require('dotenv').config();

const { MongoClient } = require('mongodb');

const connect = async () => {
    await mongoose.connect(process.env.DB_URI_TEST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

const close = async () => {
    await mongoose.connection.close();
};

const clear = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        await collections[key].deleteMany({});
    }
};
module.exports = { connect, close, clear };
