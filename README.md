# SQL Injection Login Demo (Educational)

This is a minimal Node/Express app that intentionally contains a SQL injection vulnerability in its login endpoint. It exists only for education and for testing scanners like Trivy. **Do not deploy this anywhere real.**

## Quick start

```bash
npm install
npm start   # starts http://localhost:3001
```

Then open http://localhost:3001/ to use the built-in demo page.

## The vulnerability

`POST /api/login` builds a SQL string with user input:

```js
const sql =
  "SELECT id, username, role FROM users WHERE username = '" + username + "' AND password = '" + password + "';";
```

No parameterization = SQL injection. The in-memory SQLite DB has an `admin` user whose real password is not provided, so only injection will log you in. Example payloads:

- `{"username": "admin' --", "password": "x"}`
- `{"username": "' OR 1=1 --", "password": "x"}`

## Files

- `server.js` — Express server, vulnerable `/api/login`, seeds an in-memory SQLite DB.
- `public/index.html` — simple UI to send login requests and try the injection payload.
- `package.json` — deps and scripts.

## Running Trivy

If you have Trivy installed:

```bash
# Dependency and secret/misconfig scan
trivy fs --scanners vuln,secret,misconfig .

# Code/SAST scan (requires a Trivy build that includes the `code` scanner)
# If your version supports it, add ",code" to scanners:
# trivy fs --scanners vuln,secret,misconfig,code .
```

Trivy should flag the unsafe SQL concatenation in `server.js` when the code scanner is enabled.

## Reminder

This app is intentionally unsafe and for demos only. Never reuse this pattern; always use prepared statements/parameterized queries and proper auth.
