const express = require('express');
const {
    getUsers,
    getUnverifiedMentors,
    verifyMentor,
    getWebinars,
    getClasses,
    getMerchandise,
    addMerchandise,
    updateMerchandise,
    deleteMerchandise,
} = require('../controllers/adminController');

const router = express.Router();

// Routes untuk User dan Mentor
router.get('/users', getUsers);
router.get('/mentors/unverified', getUnverifiedMentors);
router.post('/mentors/verify', verifyMentor);

// Routes untuk Webinar dan Kelas
router.get('/webinars', getWebinars);
router.get('/classes', getClasses);

// Routes untuk Merchandise
router.get('/merchandise', getMerchandise);
router.post('/merchandise', addMerchandise);
router.put('/merchandise', updateMerchandise);
router.delete('/merchandise/:id', deleteMerchandise);

module.exports = router;
