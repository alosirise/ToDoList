<template>
    <div>
        <h1>List tasks</h1>
        <flash-message></flash-message>
        <div>
            <i></i>Tasks :
            <input type="text" readonly :value="task.task1">
        </div>

        <div>
            <i></i>Detail :
            <input type="text" readonly :value="task.task2">
        </div>
        <div class="action">
            <router-link :to="{ name: 'edit', params: { id: this.$route.params.id } }">
                Edit-task
            </router-link>
        </div>
    </div>
</template>


<script>
import { api } from "../helper/Helpers"

export default {
    name: 'list',
    data() {
        return {
            task: ''
        }
    },
    async mounted() {
        this.task = await api.gettask(this.$route.params.id)
    }

}
</script>

<style scoped>
.action a {
    display: block;
    text-decoration: underline;
    margin: 20px 10px;
}
</style>