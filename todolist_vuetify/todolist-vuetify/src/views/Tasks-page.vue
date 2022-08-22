<template>
    <div>
        <h1 class="ma-4">All Tasks</h1>
        <flash-message></flash-message>
        <div v-if="this.tasks.length > 0">
            <!-- <table id="tasks">
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
                    <td class="center aligned">
                        <router-link :to="{ name: 'list', params: { id: task._id } }">
                            <v-btn class="mx-3 white--text" elevation="2" rounded color="green "
                                :to="{ name: 'list', params: { id: task._id } }">show</v-btn>
                        </router-link>
                    </td>
                    <td class="center aligned">
                        <router-link :to="{ name: 'edit', params: { id: task._id } }">
                            <v-btn class="mx-3 white--text" elevation="2" rounded color="blue darken-2"
                                :to="{ name: 'edit', params: { id: task._id } }">Edit</v-btn>
                        </router-link>
                    </td>
                    <td class="center aligned" @click.prevent="onDestroy(task._id)">
                        <a :href="`/tasks/${task._id}`">Delete</a>
                    </td>
                </tr>
            </table> -->

            <v-data-table :headers="headers" :items="tasks" hide-default-footer :items-per-page="-1" :footer-props="{
                itemsPerPageOptions: [-1],
            }">

                <template v-slot:body="{ items }">
                    <tbody>
                        <tr v-for="(task, i) in tasks" :key="i">
                            <td>{{ task.task1 }}</td>
                            <td>{{ task.task2 }}</td>
                            <td>
                                <v-layout justify-center>
                                    <router-link class="routerLink" :to="{ name: 'list', params: { id: task._id } }">
                                        <v-btn class="mx-3 white--text" elevation="2" rounded color="green "
                                            :to="{ name: 'list', params: { id: task._id } }">show</v-btn>
                                    </router-link>
                                </v-layout>
                            </td>
                            <td>
                                <v-layout justify-center>
                                    <router-link class="routerLink" :to="{ name: 'edit', params: { id: task._id } }">
                                        <v-btn class="mx-3 white--text" elevation="2" rounded color="blue darken-2"
                                            :to="{ name: 'edit', params: { id: task._id } }">
                                            <v-icon dark left>
                                                mdi-pencil
                                            </v-icon>Edit
                                        </v-btn>
                                    </router-link>
                                </v-layout>
                            </td>

                            <td>
                                <v-layout justify-center>
                                    <v-btn :href="`/tasks/${task._id}`" @click.prevent="onDestroy(task._id)" class="mx-3 white--text" elevation="2" rounded color="red">
                                        <v-icon dark left>
                                            mdi-cancel
                                        </v-icon>
                                        Delete
                                    </v-btn>
                                  
                                </v-layout>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-data-table>
        </div>

        <div v-else>
            <v-alert  color="red" type="info" dark dismissible>Don't have any task !</v-alert>
        </div>
    </div>
</template>


<script>
import { api } from "../helper/Helpers"
export default {

    name: 'tasks',
    data() {
        return {
            headers: [
                {
                    text: 'Tasks',
                    align: 'center',
                    sortable: false,
                },
                {
                    text: 'Detail',
                    align: 'center',
                    sortable: false,
                },
                {
                    text: 'Show',
                    align: 'center',
                    sortable: false,
                },
                {
                    text: 'Edit',
                    align: 'center',
                    sortable: false,
                },
                {
                    text: 'Delete',
                    align: 'center',
                    sortable: false,
                },
            ],
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

<style>
.routerLink {
    text-decoration: none;
}
</style>