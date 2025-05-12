// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const Event = require('../models/event');



// In-memory array to store conract page messages and details
const submissions = [];

// Home
router.get('/', (req, res) => {
    res.render('pages/home', { 
        title: 'Home', 
        message: 'Welcome to the Home Page', 
        currentPage: '/'
    });
});

// About
router.get('/about', (req, res) => {
    res.render('pages/about', { 
        title: 'About', 
        message: 'Welcome to the About Page', 
        currentPage: '/about'
    });
});

// Events(old)
// router.get('/events', (req, res) => {
//     res.render('pages/events', { 
//         title: 'Events', 
//         message: 'Welcome to the Events Page', 
//         currentPage: '/events'
//     });
// });

// Events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find().exec();
    console.log(events);
    res.render('pages/events', { 
      title: 'Events', 
      message: 'Welcome to the Events Page', 
      currentPage: '/events',
      events: events
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving events');
  }
});

router.get('/addevent', (req, res) => {
  res.render('pages/addevent', { 
    title: 'Add a New Event', 
    message: 'Add a new event', 
    currentPage: '/addevent'
  });
});

// Add a new event
router.post('/events', async (req, res) => {
  try {
    const event = new Event({
      title: req.body.title,
      date: req.body.date,
      time: req.body.time,
      description: req.body.description
    });
    await event.save();
    res.redirect('/events');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding event');
  }
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

    res.render('pages/thankyou', { 
        title: 'Thank You', 
        currentPage: '/contact', 
        name, 
        email, 
        message });
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
