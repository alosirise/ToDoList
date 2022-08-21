<template>
<form action="#" @submit.prevent="onSubmit">
<p v-if="errorPresent" class="error">Please fill data
</p>
<div>
    <div>
        <i class="calendar plus icon"></i> Task
    </div>
    <input type="text" placeholder="Enter task.." v-model="task.task1">
</div>


<div>
    <div>
        <i class="info circle icon"></i> Details
    </div>
    <input type="text" placeholder="Enter details.." v-model="task.task2">
</div>

<button class="positive"> Submit </button>
</form>
</template>

<script>
export default{
    name : 'task-form',
    props:{
        task:{
            type: Object,
            required : false,
            default : ()=>{
                 return{
                    task1: "",
                    task2: ""
                 }
            }
        }
    },
    data(){
        return {
            errorPresent: false
        }
    },
    methods :{
        onSubmit: function(){
            if(this.task.task1 === '' || this.task.task2 ===''){
                this.errorPresent =true;
            }else{
                this.$emit('createOrUpdate',this.task);
            }

        }
    }
}
</script> 
<style scoped>
        .error {
            color : red;
        }
</style>