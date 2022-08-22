<template>
    <div>
        <h1 class="ma-4">Task Detail</h1>
        <flash-message></flash-message>
        <v-card class="mx-auto" max-width="1000">
            <v-toolbar color="green" dark dense flat>
                <v-toolbar-title class="text-body-1">
                   Task
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="6" sm="6">
                            <v-text-field  v-model="task.task1" label="Task" readonly ></v-text-field>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="6" sm="6">
                            <v-textarea rows="3"  v-model="task.task2" label="Detail" readonly></v-textarea>
                        </v-col>
                        <v-spacer></v-spacer>

                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <router-link class="routerLink" :to="{ name: 'edit', params: { id: this.$route.params.id } }">
                        <v-btn class="ma-3" color="primary" type="submit"  >
                            <v-icon dark left>
                                mdi-pencil
                            </v-icon>Edit
                        </v-btn>
                    </router-link>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card-text>
        </v-card>

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
.routerLink{
     text-decoration: none;
 }

</style>