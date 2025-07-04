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

const allowedOrigins = [
  'http://localhost:3000',
  'https://work-sync.vercel.app',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed for this origin: ' + origin));
    }
  },
  credentials: true,
}));


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development', // Enable GraphiQL in development mode
}));
app.listen(port, console.log(`Server running on port ${port}`));
