// events.js
const express = require('express');
const router = express.Router();
const Event = require('../event');

router.get('/events', (req, res) => {
  console.log('Fetching events data...');
  Event.find().then((events) => {
    console.log('Events data fetched:', events);
    res.render('pages/events', { 
      title: 'Events', 
      message: 'Welcome to the Events Page', 
      currentPage: '/events',
      events: events
    });
  }).catch((err) => {
    console.error('Error fetching events data:', err);
    res.status(500).send('Error fetching events data');
  });
});

module.exports = router;