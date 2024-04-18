<script setup>
import Task from './Task.vue';
import tasksService from '../services/tasks.service';
import { onMounted, ref,computed, defineProps } from "vue";

const tasks = ref([])

let lenght = computed(() => {
  return tasks.value.length > 0 ? true : false
})

const getTasks = () => {
  tasksService.getTasks()
  .then(res => tasks.value = res)
  .catch(err => console.log(err))
}

onMounted(() => {
  getTasks()
})

function deleteTask(id){
  tasksService.deleteTask(id)
  .then(res =>  getTasks())
  .catch(err => console.log(err))

 
}


</script>

<template>

    <h1>Tasks todo</h1>

    <div class="task-card" v-if="lenght" v-for="task of tasks">
        <Task 
        :title="task.title"
        :description="task.description"
        :id="task._id"
        :key="task._id"
        @delete-task="deleteTask"
         />
    </div>
    <span v-else>No hay tareas por hacer</span>
</template>
<style scoped>

  .task-card{

    --background-color-task: #0D1821;


    width: 150px;
    height: 150px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color:var(--background-color-task);
    border:0;
    border-radius:15px;
  }

  h1{
    margin-top: 15px
  }

</style>