// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

//Sample data
const teamMembers = [
                      { name: 'Jean Paul Smit', role: 'Developer' },
                      {  name:'Vaughn Du Preez', role: 'Designer' },
                      { name: 'Neo Polori', role: 'Manager' },
                      { name: 'Joseph Pereira', role: 'Team Leader' },
                    ]

const events = [
                 {title:'Summer festival', date:'2025-07-12', location:'Braamfontein'},
                 {title:'Youth workshop', date:'2025-06-16', location:'Sandton'}
               ]


 //Store form data              ]
const contactSubmission = [];

               //Routes
router.get('/', (req, res) => {
    res.render('pages/home', { title: 'Home', message: 'Welcome to the Home Page', UpcomingEvents: events.slice(0.2) });//SHow first 2 events
});

router.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About', message: 'Welcome to the About Page', teamMembers });
});

router.get('/events', (req, res) => {
    res.render('pages/events', { title: 'Events', message: 'Welcome to the Events Page', events });
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact', message: 'Welcome to the Contact Page' });
});

router.post('/thankyou', (req, res) => {
    const { name, email, message } = req.body;
    contactSubmission.push({ name, email, message });//store submission 
    
    res.render('pages/thankyou', { title: 'Thank You', name, email, message });
});



module.exports = router;
