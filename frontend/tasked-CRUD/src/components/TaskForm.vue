<script setup>
import { useRouter } from 'vue-router';
import tasksService from '../services/tasks.service';
import { ref } from 'vue'
const router = useRouter();

const msg = ref('')


let title,description

const createTask = () => {
    tasksService.createTask({title, description})
    .then(res => res.json())
    .then(res => {
        if(!res.error){
            return router.push('/')
        }

        msg.value = res.error[0].message
    })
    .catch(err =>console.log(err))

    console.log({title, description})
}



</script>
<template>
    <div class="container-form">
        <h2 class="header">Form to create a Task</h2>

        <form @submit.prevent="createTask" method="post">
            <div class="title">
                <label for="title">Title:</label>
                <input v-model="title" type="text" name="title" id="title" placeholder="Task Title" required>
            </div>
            <div class="description">
                <label for="description">Description:</label>
                <textarea v-model="description" type="text" name="description" id="description" placeholder="Task description"></textarea>
            </div>
            <button>save task</button>
            <span>{{ msg }}</span>
        </form>
    </div>
</template>
<style scoped>

    .container-form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 200px;
        height: 250px;  
        margin-top: 30px;
        box-shadow: -1px 1px 10px black  ;
        border:0;
        border-radius: 15px;
    }


    .header{
        border-radius: 15px;
        text-align: center;
    }


    form{
        border-radius: 15px;
    }

    .title{
        margin-bottom: 20px;
    }


    .title > input{

        outline: 0;
        border:0;
        border-bottom: 1px solid black;
    }


    .description > textarea{
        outline: 0;
        border:0;
        border-bottom: 1px solid black;
    }

    button{
        border:0;
        border-radius:10px;
        width: 100px;
        margin-left: 50px;
        margin-right: 50px;
        background: #000;
    }

    button:hover{
        cursor:pointer;
    }
</style>