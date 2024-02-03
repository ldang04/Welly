const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
   creator: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user', 
        default: new mongoose.Types.ObjectId("65b9c8665d118eb8717acc5a") // temporary: spongebob is temporary creator
   }, 
   photo: {
        type: String, // image url
        required: true
   }, 
   task: {
        type: String, 
        default: ""
   },
   likes: {
        type: Number, 
        default: 0
   }, 
   completed: {
     type: Boolean, 
     default: false
   }, 
   group: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'group'
   }, 
   public: {
     type: Boolean, 
     default: false // need to specify when creating post that it's public
   }
});

module.exports = Post = mongoose.model('post', PostSchema);