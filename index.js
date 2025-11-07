const express = require('express');
const mainRoutes = require('./routes/main');

const app = express();
const port = 8000;

// Tell Express to use EJS 
app.set('view engine', 'ejs');

// Set up the body parser 
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));


app.use('/', mainRoutes);

app.listen(port, () => {
  console.log(`Liquid Nourishment Store app listening at http://localhost:${port}`);
});
