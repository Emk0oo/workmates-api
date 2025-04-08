const express = require('express');
const router = express.Router();
const sessionsController = require('../controllers/sessionsController');
const auth = require('../middleware/authMiddleware');

// CRUD des sessions
router.get('/', auth, sessionsController.getAllSessions);
router.get('/:id', auth, sessionsController.getSessionById);
router.post('/', auth, sessionsController.createSession);
router.put('/:id', auth, sessionsController.updateSession);
router.delete('/:id', auth, sessionsController.deleteSession);

module.exports = router;
