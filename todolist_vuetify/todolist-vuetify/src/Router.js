import Vue from 'vue'
import Router from 'vue-router'
import Edit from './views/Edit-page.vue'
import List from './views/List-page.vue'
import Add from './views/Add-page.vue'
import Tasks from './views/Tasks-page.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes:  [
        {
        path:'/',
        redirect: '/tasks' 

        },
        {
            path:'/tasks',
            name :'tasks',
            component : Tasks
        },
        {
            path:'/tasks/add',
            name : 'add-task',
            component : Add
            
        },
        {
            path:'/tasks/:id',
            name: 'list',
            component: List
            
        },
        {
            path:'/tasks/:id/edit',
            name: 'edit',
            component: Edit
            
        },
    ]

})