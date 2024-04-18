<script setup>

import { onMounted, ref } from 'vue';
import tasksService from '../services/tasks.service';
import {useRoute, useRouter} from 'vue-router'


const msg = ref('')

const router = useRouter();
const route = useRoute();

const getDataTask = (id) => {
    tasksService.getTaskById(id)
    .then(res => {
        title.value = res.taskFounded.title
        description.value = res.taskFounded.description
    })
    .catch(err => console.log(err))


}

onMounted(() => {
    getDataTask(route.params.id)
})



function updateTask(){
    tasksService.updateTask(route.params.id,{title: title.value, description: description.value})
    .then(res => {
        if(!res.error){
            return router.push('/')
        }

        getDataTask(route.params.id)
        msg.value = res.error[0].message

    })
    .catch(err => console.log(err))
}


</script>
<template>
    <h1>Update Task</h1>
    <div class="container-update">
        <form @submit.prevent="updateTask" method="post">
            <label for="title">Title:</label>
            <input v-model="title" type="text" name="title" id="title" placeholder="Task Title" required>
            <label for="description">Description:</label>
            <textarea v-model="description" type="text" name="description" id="description" placeholder="Task description"></textarea>
            <button>save task</button>
        </form>
        <span class="msg" v-show="msg">{{ msg }}</span>
    </div>
</template>
<style scoped>

    .container-update{
        width: 200px;
        height: 250px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
    }

    h1{
        text-align: center;
    }
    button{
        outline:0;
        border:0;
        background: #000;
        border-radius: 20px;
        width: 125px;
        height: 20px;
        margin-left: 25px;
        cursor:pointer;
        
    }

</style>