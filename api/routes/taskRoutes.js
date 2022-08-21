const taskbuilder = require('../controllers/taskController');

module.exports = app =>{
    app.route('/tasks')
    .get(taskbuilder.list_all_tasks)
    .post(taskbuilder.add_task)

    app.route('/task/:taskId')
    .get(taskbuilder.read_task)
    .put(taskbuilder.update_task)
    .delete(taskbuilder.delete_task)
}