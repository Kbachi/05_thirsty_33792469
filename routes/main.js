// routes/main.js
const express = require('express');
const router = express.Router();


// Define our data that will be passed to templates
const shopData = {
  shopName: "Liquid Nourishment Store",
  productCategories: ["Alcohol", "Energy Drinks", "Fizzy Drinks", "Hot Drinks"]
};

// Home page route
router.get('/', (req, res) => {
  // render index.ejs and pass shopData
  res.render('index.ejs', shopData);
});

// About page
router.get('/about', (req, res) => {
  res.render('about.ejs', shopData);
});

// Search page
router.get('/search', (req, res) => {
  res.render('search.ejs', shopData);
});

// Search page (static for now)
router.get('/search_result', function (req, res) {
    // search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

// Show register form
router.get("/register", (req, res) => {
  res.render("register.ejs", shopData);
});

// Handle form submission
router.post("/registered", (req, res) => {
  const email = req.body.email;
  if (!email.includes('@')) {
    return res.send('Please enter a valid email address!');
  }
  res.send('Hello ' + req.body.first + ' ' + req.body.last + '! Email: ' + req.body.email + ' - you have successfully registered!');
});

module.exports = router;
