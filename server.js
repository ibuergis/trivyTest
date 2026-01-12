/**
 * Intentionally vulnerable login server for educational demos.
 * Do NOT deploy this. It concatenates user input directly into a SQL query.
 */
const path = require('path');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3001;

// In-memory SQLite DB; seeded with an admin whose password is not shared.
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
  db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, role TEXT)');
  db.run('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [
    'admin',
    'SuperSecretAdminPassword!DoNotGuess',
    'admin',
  ]);
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// WARNING: This endpoint is intentionally vulnerable to SQL injection.
// It does string concatenation instead of using prepared statements.
app.post('/api/login', (req, res) => {
  const { username = '', password = '' } = req.body || {};

  const sql =
    "SELECT id, username, role FROM users WHERE username = '" + username + "' AND password = '" + password + "';";

  db.get(sql, (err, row) => {
    if (err) {
      console.error('Database error', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (!row) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    return res.json({ userId: row.id, username: row.username, role: row.role });
  });
});

app.listen(port, () => {
  console.log(`Vulnerable demo listening on http://localhost:${port}`);
  console.log('Try POSTing to /api/login with an injection payload like:');
  console.log(`{ "username": "admin' --", "password": "x" }`);
});
