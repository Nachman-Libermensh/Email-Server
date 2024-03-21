const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    to: [{
        type: String,
        required: true
    }],
    from: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: String,
    subject: String

})

// messageSchema.index({ content: 1, subject: 1 }, { required: true });

const messageModel = mongoose.model('message', messageSchema)

module.exports = messageModel
