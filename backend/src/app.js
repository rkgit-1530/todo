// src/app.js
const express = require('express');
const cors = require('cors');
const todoRoutes = require('./modules/todos/todo.routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Todo API is running' });
});

// Todo routes
app.use('/api/todos', todoRoutes);

// Error handler (should be last)
app.use(errorHandler);

module.exports = app;
