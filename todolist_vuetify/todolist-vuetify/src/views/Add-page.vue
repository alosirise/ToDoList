<template>
<div>
    <h1>Add</h1>
    <task-form @createOrUpdate="createOrUpdate"></task-form>
    </div>
</template>

<script>
import taskForm from '../components/TaskForm.vue'
import {api} from '../helper/Helpers'

export default
{
    name: 'add-task',
    components :{
        'task-form' : taskForm
    },
    methods :{
        createOrUpdate : async function(task){
            const res = await api.createtask(task);
            this.flash('task created' ,'success');
            this.$router.push(`/tasks/${res._id}`);
        }
    }
}
</script>