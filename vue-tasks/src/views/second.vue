<script setup>
import {ref} from "vue";

let input1 = ref('')
let input2 = ref('')
let input12 = ref('')
let input22 = ref('')
let names = ref([])
let cities = ref([])

function addName() {
  for (let i = 0; i < input12.value; i = i + 1) {
    names.value.push(input1.value)
  }
}

function addCity() {
  for (let i = 0; i < input22.value; i = i + 1) {
    cities.value.push(input2.value)
  }
}
</script>

<template>
  <div class="blocks">
    <div class="names">
      <h2>Имена</h2>
      <h3>Введите имя</h3>
      <input v-model="input1" class='in1' id='input1' placeholder="Введите имя">
      <h3>Сколько ввести?</h3>
      <input v-model="input12" class='in12' id='input1.2' placeholder="Введите кол-во">
      <h2></h2>
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
      <h2>Города</h2>
      <h3>Введите город</h3>
      <input v-model="input2" class='in2' id="input2" placeholder="Введите город">
      <h3>Сколько ввести?</h3>
      <input v-model="input22" class='in22' id="input2.2" placeholder="Введите кол-во">
      <h2></h2>
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