const express = require('express');
const os = require('os');
const path = require('path');
const app = express();
const PORT = 3000;  

// request /photos/3542?size=thumbnail&format=jpg
// This path for get requests with a photoid parameter and id
// This example also shows how to get express query params
app.get('/photos/:photoid', (req, res, next)=>{
  console.log(`photoid is ${req.params.photoid}`)      // 3542
  console.log("query params are %o, and 'size' is %s", req.query, req.query.size); 
  res.status(200).send(`Photo ${req.params.photoid} - size: ${req.query.size}, format: ${req.query.format}`);
});

// request '/photos/3542/comments/45356'
// This path for get requests with a photoid parameter and commentid parameter
app.get('/photos/:photoid/comments/:commentid', (req, res, next)=>{
   console.log(`photoid is ${req.params.photoid}`)      // 3542
   console.log(`commentid is ${req.params.commentid}`)  // 45356
   res.status(200).send(`Photo ${req.params.photoid} - comment ${req.params.commentid}`);
});

// add servestatic the root path, mapped to 'htdocs' directory - this will serve any files in that directory at the root path
// In this case, just index.html
app.use('/', express.static(path.join(__dirname, 'htdocs'))); 

// if none of the above paths match, then this will be called - this is a catch-all for any paths that aren't handled above
app.use( (req, res) => {
  res.status(404).send('Sorry - I don\'t have that');
  // could also do this to serve a custom 404 page);
  //res.status(404).redirect('/404.html'); 
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});