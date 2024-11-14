// routes/employee.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getProfile } = require('./controller/employeeController');

router.get('/profile', auth('Employee'), getProfile);

module.exports = router;
