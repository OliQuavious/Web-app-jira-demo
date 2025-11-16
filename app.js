const express = require('express');
const { login } = require('./auth'); // optional, only if you have auth.js
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Web App Jira Demo');
});

// Homepage route for Jira WEB-123
app.get('/homepage', (req, res) => {
  res.send('Homepage - Jira Integration Test');
});

// About route
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Login test route (optional, for auth.js)
app.get('/login-test', (req, res) => {
  const result = login("admin", "1234"); // only if auth.js exists
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

