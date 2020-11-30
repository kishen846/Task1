const mongoose = require('mongoose');

var Student = mongoose.model('Student', {
    name: { type: String },
    usn: { type: String },
    branch: { type: String },
    sem: { type: String },
});

module.exports = { Student };