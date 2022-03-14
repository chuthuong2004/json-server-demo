// import express from "express";
const express = require("express");
// import courseController from '../controllers/coursesController.js'
const courseController = require('../controllers/coursesController');
const router = express.Router();


router.get('/:id', courseController.getAnCourse);
router.post('/', courseController.addCourse);
router.get('/', courseController.getAllCourses);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);
module.exports = router;