<template>
<div>
    <h1 class="ma-4">Add tasks</h1>
    <task-form @createOrUpdate="createOrUpdate"></task-form>
    </div>
</template>

<script>
import {api} from '../helper/Helpers'
import taskForm from '../components/TaskForm.vue'


export default
{
    name: 'add-task',
    components :{
        'task-form' : taskForm
    },
    methods :{
        createOrUpdate : async function(task){
            const res = await api.createtask(task);
            this.flashSuccess('Task Created !!' ,'success');
            this.$router.push(`/tasks/${res._id}`);
        }
    }
}
</script>