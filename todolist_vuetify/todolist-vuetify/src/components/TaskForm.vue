<template>
    <form action="#" @submit.prevent="onSubmit">
        <v-alert v-if="errorPresent" color="red" type="info" dark dismissible>Please fill data</v-alert>
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
                            <v-text-field v-model="task.task1" label="Task" clearable></v-text-field>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="6" sm="6">
                            <v-textarea rows="3" v-model="task.task2" label="Detail" clearable></v-textarea>
                        </v-col>
                        <v-spacer></v-spacer>

                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="ma-3" color="success" type="submit" dark>                   
                        <v-icon dark left>
                            mdi-checkbox-marked-circle
                        </v-icon>Submit
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card-text>
        </v-card>
    </form>
</template>

<script>
export default {
    name: 'task-form',
    props: {
        task: {
            type: Object,
            required: false,
            default: () => {
                return {
                    task1: "",
                    task2: ""
                }
            }
        }
    },
    data() {
        return {
            errorPresent: false
        }
    },
    methods: {
        onSubmit: function () {
            if (this.task.task1 === '' || this.task.task2 === '') {
                this.errorPresent = true;
            } else {
                this.$emit('createOrUpdate', this.task);
            }

        }
    }
}
</script> 