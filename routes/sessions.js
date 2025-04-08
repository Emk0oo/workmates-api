const express = require('express');
const router = express.Router();
const sessionsController = require('../controllers/sessionsController');

// CRUD des sessions
router.get('/', sessionsController.getAllSessions);
router.get('/:id', sessionsController.getSessionById);
router.post('/', sessionsController.createSession);
router.put('/:id', sessionsController.updateSession);
router.delete('/:id', sessionsController.deleteSession);

module.exports = router;
