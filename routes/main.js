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

// Search page (static for now)
router.get('/search', (req, res) => {
  res.render('search.ejs', shopData);
});

// Search results route (GET form)
router.get('/search_result', (req, res) => {
  const { search_text, category } = req.query;
  res.send(`You searched for ${search_text} in ${category}`);
});

module.exports = router;
