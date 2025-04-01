<script setup>
import { ref, computed } from 'vue'

let inp = ref('')
let tasks = ref([])

function getNotCompleted() {
  let count = 0

  for (let task of tasks.value) {
    if (task.completed === false) {
      count = count + 1
    }
  }

  return count
}

let p = computed(getNotCompleted)


function addTasks(){
  let task = {
    name: inp.value,
    completed: false
  }
  tasks.value.push(task)
  p.value = p + 1
}

function DeletAll(){
  let confAll = confirm('Точно хотите их удалить?')
  if (confAll === true){
    tasks.value = []
  }
}

function DeletCom() {
  let confCom = confirm('Точно хотите их удалить?')
  let ComTasks = []
  if (confCom === true){
    for (let task of tasks.value){
      if (task.completed === false){
        ComTasks.push(task)
      }
    }
    tasks.value = ComTasks
  }
}

function DeletOne(index){
  let conf = confirm("Точно хотите удалить?")
  if (conf === true){
    tasks.value.splice(index,1)
  }
}


</script>


<template>
  <div class="container">
    <div class="task">
      <h3 class="title">Список задач</h3>
      <div class="form">
        <input class="input" type="text" v-model="inp" id="inp">
        <button class="form" @click="addTasks">+</button>
      </div>
      <ul class="taskItems">
        <li
          v-for="(task, index) in tasks"
          :class="{ 'completed': task.completed === true}"
          @click="task.completed = true"
        > <img class="img2" :src="task.completed === false ? 'https://cdn-icons-png.flaticon.com/512/32/32463.png' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93K_Q4pO7pLfvSuIqCRma31DVZXrvX2YnAA&s'">
          {{ task.name}}
          <button @click.stop="DeletOne(index)">
          <img class="img" src="https://cdn-icons-png.flaticon.com/512/114/114553.png">
        </button >
        </li>
      </ul>
      <div class="clearBtns">
        <button @click="DeletCom" id="b1">Удалить выполненные</button>
        <button @click="DeletAll" id="b2">Удалить всё</button>
      </div>
      <p>Ожидают выполнения: {{ p }}</p>
    </div>
  </div>
</template>


<style scoped>

</style>
