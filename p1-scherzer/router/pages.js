const express = require('express');
const router = express.Router();


// GET request to the root path
router.get('/', (req, res) => {
    res.render('landingpage');
});


// GET request to the /about path
router.get('/about', (req, res) => {
    res.send('About page');
});

// GET request to the /contact path
router.get('/contact', (req, res) => {
    res.send('Contact page');
});

// Export the router
module.exports = router;