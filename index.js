// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import courses from './routers/courses.js';
// import mongoose from 'mongoose';
// import morgan from 'morgan';
// import dotenv from 'dotenv';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const courses = require('./routers/courses');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_DB;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());
app.use(morgan('common'));
app.use('/api/courses', courses);
mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error(err));