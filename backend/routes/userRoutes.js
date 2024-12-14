const express = require('express');
const { 
    getAllWebinars, 
    registerForWebinar, 
    getUserWebinars, 
    getAllMerchandise, 
    purchaseItem 
} = require('../controllers/userController');
const router = express.Router();

// User Routes
router.get('/webinars', getAllWebinars);
router.post('/webinars/register', registerForWebinar);
router.get('/webinars/user/:user_id', getUserWebinars);
router.get('/merchandise', getAllMerchandise);
router.post('/purchase', purchaseItem);

module.exports = router;
