// import { Course } from '../models/CourseModel.js';
const Course = require('../models/CourseModel');
// export const getCourses = async(req, res) => {
//     try {
//         const courses = await Course.find();
//         console.log('Courses', courses);
//         res.status(200).json(courses);
//     } catch (err) {
//         res.status(500).json({ err: err });
//     }
// }
// export const createCourse = async(req, res) => {
//     try {
//         const newCourse = req.body;
//         const course = new CourseModel(newCourse);
//         await course.save();
//         res.status(200).json(course);
//     } catch (err) {
//         res.status(500).json({ err: err });
//     }
// }

// export const updateCourse = async(req, res) => {
//     try {
//         const updateCourse = req.body;
//         const course = await CourseModel.findOneAndUpdate({ _id: updateCourse._id }, updateCourse, { new: true });
//         await course.save();
//         res.status(200).json(course);
//     } catch (err) {
//         res.status(500).json({ err: err });
//     }
// }

const courseController = {
    addCourse: async(req, res) => {
        try {
            const newCourse = req.body;
            const course = new Course(newCourse);
            await course.save();
            res.status(200).json(course);
        } catch (err) {
            res.status(500).json({ err: err });
        }
    },
    getAllCourses: async(req, res) => {
        try {
            const courses = await Course.find();
            console.log('Courses', courses);
            res.status(200).json(courses);
        } catch (err) {
            res.status(500).json({ err: err });
        }
    },
    getAnCourse: async(req, res) => {
        try {
            const course = await Course.findById(req.params.id);
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ err: error })
        }
    },

    updateCourse: async(req, res) => {
        try {
            const updateCourse = req.body;
            const course = await Course.findByIdAndUpdate({ _id: req.params.id }, updateCourse);
            await course.save();
            res.status(200).json('Updated successfully');
        } catch (err) {
            res.status(500).json({ err: err });
        }
    },
    deleteCourse: async(req, res) => {
        try {
            await Course.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully')
        } catch (error) {
            res.status(500).json({ err: error })
        }
    }

}
module.exports = courseController;