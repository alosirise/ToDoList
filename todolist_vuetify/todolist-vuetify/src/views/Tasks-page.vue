<template>
    <div>
        <h1>Tasks</h1>
        <flash-message></flash-message>
        <div v-if="this.tasks.length > 0">
            <table id="tasks">
                <thead>
                    <tr>
                        <th><i></i>Task</th>
                        <th><i></i>Detail</th>
                        <th><i></i>lock open</th>
                        <th><i></i>edit</th>
                        <th><i></i>trash</th>
                    </tr>
                </thead>
                <tr v-for="(task, i) in tasks" :key="i">
                    <td>{{ task.task1 }}</td>
                    <td>{{ task.task2 }}</td>
                    <td width="75" class="center aligned">
                        <router-link :to="{ name: 'list', params: { id: task._id } }">List</router-link>
                    </td>
                    <td width="75" class="center aligned">
                        <router-link :to="{ name: 'edit', params: { id: task._id } }">Edit</router-link>
                    </td>
                    <td width="75" class="center aligned" @click.prevent="onDestroy(task._id)">
                        <a :href="`/tasks/${task._id}`">Delete</a>
                    </td>
                </tr>
            </table>
        </div>

        <div v-else>
            Don't have any task!
        </div>
    </div>
</template>


<script>
import { api } from "../helper/Helpers"
export default {
    name: 'tasks',
    data() {
        return {
            tasks: []
        }
    },
    methods: {
        async onDestroy(id) {
            const sure = window.confirm('Are you sure?');
            if (!sure) return;
            await api.deletetask(id);
            this.flash('Delete succcess!', 'success');
            const newtasks = this.tasks.filter(task => task._id !== id);
            this.tasks = newtasks;
        }
    },
    async mounted() {
        this.tasks = await api.gettasks();
    }
}

</script>