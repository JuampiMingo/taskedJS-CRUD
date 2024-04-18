import { createRouter, createMemoryHistory } from "vue-router";

import HomeComponent from './components/HomeComponent.vue'
import TaskForm from './components/TaskForm.vue'
import UpdateTask from './components/UpdateTask.vue'
const routes = [
    {path: '/', component: HomeComponent},
    {path:'/create-task', component: TaskForm},
    {path: '/update-task/:id', component: UpdateTask}
]


export default createRouter({
    history: createMemoryHistory(),
    routes
})

