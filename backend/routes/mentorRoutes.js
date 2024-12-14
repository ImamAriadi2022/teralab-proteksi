const express = require('express');
const { 
    createWebinar, 
    addClass 
} = require('../controllers/mentorController');
const router = express.Router();

// Mentor Routes
router.post('/webinars', createWebinar);
router.post('/classes', addClass);

module.exports = router;
