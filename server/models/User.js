const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    progress: {
        type: Number, 
        default: 0
    }, 
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user', 
            default: []
        }
    ], 
    groups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'group'
        }
    ]
});

module.exports = User = mongoose.model('user', UserSchema);