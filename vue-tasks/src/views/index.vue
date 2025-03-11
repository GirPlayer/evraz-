<script setup>
import {ref} from "vue";

let input1 = ref('')
let input2 = ref('')
let names = ref([])
let cities = ref([])

function addName(){
  names.value.push(input1.value)
}

function addCity(){
  cities.value.push(input2.value)
}
</script>

<template>
  <div class="blocks">
    <div class="names">
      <h3>Имена</h3>
      <input v-model="input1" id='input1' placeholder="Введите имя">
      <button
          @click="addName"
      >
        Добавить имя
      </button>
      <h3>Место для добавления</h3>
      <ul>
        <li
          class="names-li"
          v-for="name in names"
        >
          {{ name }}
        </li>
      </ul>
    </div>
    <div class="cities">
      <h3>Города</h3>
      <input v-model="input2" id="input2" placeholder="Введите город">
      <button
          @click="addCity"
      >
        Добавить город
      </button>
      <h3>Место для добавления</h3>
      <ul>
        <li
          class="cities-li"
          v-for="city in cities"
        >
          {{ city }}
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
.blocks {
  display: flex
}
.cities{
  margin-left: 300px;
}

.names-li{
  color: green;
  text-decoration: underline;
}

.cities-li{
  color: red;
  text-decoration: underline;
}
</style>