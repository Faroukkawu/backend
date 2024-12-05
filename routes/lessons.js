// routes/lessons.js
const express = require('express');
const router = express.Router();
const { getLessons, getLessonById } = require('../controllers/lessonsController');

// Route to get all lessons
router.get('/lessons', getLessons);


module.exports = router;