<script setup>
import { ref } from 'vue'

let inp = ref('')
let tasks = ref([])

function addTasks(){
  let task = {
    name: inp.value,
    completed: false
  }
  tasks.value.push(task)
}

function DeletAll(){
  tasks.value = ''
}

function DeletCom() {
  let ComTasks = []
  for (let task of tasks.value){
    if (task.completed === false){
      ComTasks.push(task)
    }
  }
  tasks.value = ComTasks
}
</script>


<template>
  <div class="container">
    <div class="task">
      <h3 class="title">Список задач</h3>
      <input class="input" type="text" v-model="inp" id="inp">
      <button @click="addTasks">+</button>
      <ul class="taskItems">
        <li
          v-for="task in tasks"
          :class="{ 'completed': task.completed === true}"
          @click="task.completed = true"
        > <button>
          -
        </button>
          {{ task.name}}
        </li>
      </ul>
      <div class="clearBtns">
        <button @click="DeletCom" id="b1">Удалить выполненные</button>
        <button @click="DeletAll" id="b2">Удалить всё</button>
      </div>
      <p>Ожидают выполнения: 0</p>
    </div>
  </div>
</template>


<style scoped>

</style>
