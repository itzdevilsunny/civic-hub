const express = require('express');
const router = express.Router();
const { getDashboardStats } = require('../controllers/dashboardController');
const { protect } = require('../middleware/auth');

// Protect the dashboard stats route
router.route('/stats').get(protect, getDashboardStats);

module.exports = router;
