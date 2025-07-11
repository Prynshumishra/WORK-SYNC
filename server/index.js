const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const connectDB = require('./config/db');
const cors = require('cors');
const syncRoutes = require('./routes/sync');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Allowlist for CORS
const allowedOrigins = [
  'http://localhost:3000',
  'https://work-sync.vercel.app',
  'work-sync-git-main-priyanshu-mishras-projects-7578a104.vercel.app',
];

app.use(express.json());
// Unified CORS middleware
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

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
}));

// Sync routes

app.use('/api', syncRoutes);

// Start server
app.listen(port, () =>
  console.log(`Server running on port ${port}`.yellow.bold)
);



