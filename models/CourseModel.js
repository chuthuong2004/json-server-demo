// import mongoose from 'mongoose';
// import slug from 'mongoose-slug-generator';
// import mongooseDelete from 'mongoose-delete';
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Course = new mongoose.Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    // deletedAt: { type: Date, maxLength: 255 },
}, {
    timestamps: true,
});

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);