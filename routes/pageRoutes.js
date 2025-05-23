// routes/pageRoutes.js
const express = require('express');
const router = express.Router();
const data = require('../public/Data/data')

// In-memory array to store contract page messages and details
const submissions = [];

// Home
router.get('/', (req, res) => {
    res.render('pages/home', { 
        title: 'Home', 
        message: 'Welcome to the Home Page', 
        currentPage: '/',
        UpcomingEvents: data.events.slice(0.2)
    });
});

// About
router.get('/about', (req, res) => {
   res.render('pages/about', { title: 'About', organization: data.organization, team: data.team, currentPage: '/about'} );
   
});

// Events 
router.get('/events', (req, res) => {
    res.render('pages/events', { title: 'Events', message: 'Welcome to the Events Page' , currentPage: '/events', events: data.events});
});

// Contact
router.get('/contact', (req, res) => {
    res.render('pages/contact', { 
        title: 'Contact', 
        message: 'Welcome to the Contact Page', 
        currentPage: '/contact'
    });
});

// Post from Contact to Thankyou
router.post('/thankyou', (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).send("All fields are required.");
    }

    // Create a submission object
    const submission = {
        name,
        email,
        message,
        timestamp: new Date().toLocaleString()
    };

    submissions.push(submission);

    res.render('pages/thankyou', { 
        title: 'Thank You', 
        currentPage: '/contact', 
        name, 
        email, 
        message });
});

// Contact
router.get('/submission', (req, res) => {
    res.render('pages/submission', { 
        title: 'submission', 
        currentPage: '',
        submissions
    });
});

// 404 - Catch All Other Routes
router.use("*", (req, res) => {
  res.status(404).render("pages/404", { 
    title: "404 - Not Found", 
    message: '404 - Page Not Found', 
    currentPage: "" 
    });
});

module.exports = router;