const mongoose = require('mongoose');

const {Schema} = mongoose;

const taskSchema = new Schema(
    {
        task1:{
        type : String,
        require: 'task1 cannot empty'
        },
        task2:{
        type : String,
        require: 'task1 cannot empty'
        },
   
    },
    {collection: 'task'}
)

module.exports = mongoose.model('task',taskSchema)