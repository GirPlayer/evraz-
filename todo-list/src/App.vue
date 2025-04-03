<script setup>
import { ref, computed } from 'vue'

let inp = ref('')
let tasks = ref([])
let category = ref('')

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
    category: category.value,
    items: [
      {
        name: inp.value,
        completed: false
      }
    ]
  }
  for (let task of tasks.value){
    if (task.category === category.value) {
      task.items.push({
        name: inp.value,
        completed: false
      })
      p.value = p + 1
      return
    }
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
    for (let task of tasks.category){
      if (task.completed === false){
        ComTasks.push(task)
      }
    }
    tasks.value = ComTasks
  }
}

function DeletOne(index, categoryindex){
  let conf = confirm("Точно хотите удалить?")
  if (conf === true){
    tasks.value[categoryindex].items.splice(index, 1)
  }
}


</script>


<template>
  <div class="container">
    <div class="task">
      <h3 class="title">Список задач</h3>
      <div class="form">
        <input placeholder="Задача" class="input" type="text" v-model="inp" id="inp">
        <input placeholder="Категория" class="input" type="text" v-model="category" id="inp">
        <button class="form" @click="addTasks">+</button>
      </div>
      <div v-for ='(category, categoryindex) in tasks'>
        <h2>{{category.category}}</h2>
        <ul class="taskItems">
          <li
              v-for="(task, index) in category.items"
              :class="{ 'completed': task.completed === true}"
              @click="task.completed = true"
          > <img class="img2" :src="task.completed === false ? 'https://cdn-icons-png.flaticon.com/512/32/32463.png' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93K_Q4pO7pLfvSuIqCRma31DVZXrvX2YnAA&s'">
            {{ task.name}}
            <button @click.stop="DeletOne(index, categoryindex)">
              <img class="img" src="https://cdn-icons-png.flaticon.com/512/114/114553.png">
            </button >
          </li>
        </ul>
      </div>
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
