// routes/admin.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllUsers } = require('./controller/adminController');

router.get('/users', auth('Admin'), getAllUsers);

module.exports = router;
