// routes/hr.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getEmployees, updateEmployee } = require('./controller/hrController');

router.get('/employees', auth('HR'), getEmployees);
router.put('/employee/:id', auth('HR'), updateEmployee);

module.exports = router;
