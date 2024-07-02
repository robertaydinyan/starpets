const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.put('/users/:userID/updateBalance', UserController.updateBalance);

module.exports = router;
