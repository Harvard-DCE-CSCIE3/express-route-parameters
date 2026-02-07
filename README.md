# Express Route Parameters & Query Strings Example

This project demonstrates how to handle Express route parameters and query strings in a simple Node.js server.

## What this example covers

- Route parameters (e.g., `/users/:id`)
- Query strings (e.g., `?sort=asc&limit=10`)

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Try a the links in the index.html file in your browser:
   - [http://localhost:3000/photos/3542?size=thumbnail&format=jpg](http://localhost:3000/photos/3542?size=thumbnail&format=jpg)
   - [http://localhost:3000/photos/3542/comments/45356](http://localhost:3000/photos/3542/comments/45356)

## Notes

Edit `app.js` to see how parameters and query strings are parsed and used.
