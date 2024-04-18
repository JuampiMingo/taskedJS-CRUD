<script setup>
import tasksService from '../services/tasks.service';

import { useRouter } from 'vue-router';
import { defineEmits } from 'vue';

const emit = defineEmits(['deleteTask'])

const router = useRouter()

const props = defineProps({
        title: String,
        description: String,
        id: String
})

function deleteTask() {
        emit('deleteTask', props.id)
}

function updateTask() {
        return router.push(`/update-task/${props.id}`)
}

</script>

<template>
        <div class="container">
                <div class="text">
                        <h3>{{ props.title }}</h3>
                        <span>{{ props.description }}</span>
                </div>
                <div class="buttons">
                        <button class="button btn-delete" @click.prevent="deleteTask">Delete</button>
                        <button class="button btn-update" @click.prevent="updateTask">Edit</button>
                </div>
        </div>
</template>
<style scoped>


.container{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: inherit;
        margin:10px 0px ;
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: inherit;
}

.container .text{
        background-color: inherit;
        margin-bottom: 20px;
        width: inherit;
        overflow: hidden;
        text-overflow: ellipsis;
}

h3 {
        background-color: inherit;
        color: white;
        text-align: center;
}

span{
        background-color: inherit;
        text-overflow: ellipsis;
        color: white;
}


.buttons{
        margin-top: 15px;
        background-color: inherit;
}

.button {

padding: 10px;
border: 0;
border-radius: 5px;
margin-left: 10px;

}


.button:first-child{
        margin-left:0;
}



.button:hover {
        box-shadow: -3px -3px 15px #BFC3BA;
        cursor: pointer;
        font-weight: bold;
}

.btn-delete {
        --button-danger-color: #FF0000;
        background-color: var(--button-danger-color);
}

.btn-update {
        --button-update-color: #087CA7;
        background-color: var(--button-update-color);
}
</style>