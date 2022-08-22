<template>
    <div>
        <h1 class="ma-4">Edit tasks</h1>
        <flash-message></flash-message>
       <task-form @createOrUpdate="createOrUpdate" :task=this.task></task-form>
    </div>
</template>
<script>

import taskForm from '../components/TaskForm.vue'
import {api} from '../helper/Helpers'

export default{
    name : 'edit',
    components :{
        'task-form' : taskForm
    },
    data(){  return {
            task: {}
        }
    },
    methods:{
        createOrUpdate: async function(task){
            await api.updatetask(task);
            this.flash('Task updated !!','success');
            this.$router.push(`/tasks/${task._id}`);
        }
    },
    async mounted(){
        this.task = await api.gettask(this.$route.params.id);
    }
}


</script>
<style>
.routerLink{
     text-decoration: none;
 }

 
</style>