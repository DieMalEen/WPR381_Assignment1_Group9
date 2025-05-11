// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home', { 
        title: 'Home', 
        message: 'Welcome to the Home Page', 
        currentPage: '/'
    });
});

router.get('/about', (req, res) => {
    res.render('pages/about', { 
        title: 'About', 
        message: 'Welcome to the About Page', 
        currentPage: '/about'
    });
});

router.get('/events', (req, res) => {
    res.render('pages/events', { 
        title: 'Events', 
        message: 'Welcome to the Events Page', 
        currentPage: '/events'
    });
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', { 
        title: 'Contact', 
        message: 'Welcome to the Contact Page', 
        currentPage: '/contact'
    });
});

router.post('/thankyou', (req, res) => {
    const { name, email, message } = req.body;
    
    res.render('pages/thankyou', { 
        title: 'Thank You', 
        currentPage: '/contact', 
        name, 
        email, 
        message });
});

module.exports = router;
