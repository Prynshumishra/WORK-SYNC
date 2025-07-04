const express = require('express');
const colors = require('colors');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();


connectDB();

app.use(cors({
    origin: process.env.CLIENT_URL || 'https://work-sync.vercel.app',
    credentials: true,
})); // Enable CORS for all routes

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development', // Enable GraphiQL in development mode
}));
app.listen(port, console.log(`Server running on port ${port}`));
