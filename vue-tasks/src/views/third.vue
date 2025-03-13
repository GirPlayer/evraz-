<script setup>
import {ref} from "vue";
let c1 = ref('')
let c2 = ref('')
let c3 = ref('')
let c4 = ref('')
let c5 = ref('')
let c6 = ref('')
let c7 = ref('')

function b1(){
  for(let i = 0; i < 5; i = i + 1){
    c1.value = c1.value + i
  }
}
function b2(){
  for(let i = 1; i <= 5; i = i + 1){
    c2.value = c2.value + i
  }
}
function b3(){
  for(let i = 0; i < 10; i = i + 1){
    c3.value = c3.value + i
  }
}
function b4(){
  for(let i = 1; i <= 10; i = i + 1){
    c4.value = c4.value + i
  }
}
function b5(){
  for(let i = 0; i < 20; i = i + 2){
    c5.value = c5.value + i
  }
}
function b6(){
  for(let i = 1; i < 20; i = i + 2){
    c6.value = c6.value + i
  }
}
function b7(){
  for(let i = 1; i < 20; i = i + 1){
    c7.value = c7.value + i
  }
}
</script>

<template>
  <div class="block">
    <div>
      <button
          @click="b1"
          class="b1"
      >
        Создать 5 цифр(начиная с 0)
      </button>

      {{ c1 }}
    </div>
    <div>
      <button
          @click="b2"
          class="b2"
      >
        Создать 5 цифр(начиная с 1)
      </button>

      {{ c2 }}
    </div>
    <div>
      <button
          @click="b3"
          class="b3"
      >
        Создать 10 цифр(начиная с 0)
      </button>

      {{ c3 }}
    </div>
    <div>
      <button
          @click="b4"
          class="b4"
      >
        Создать 10 цифр(начиная с 0)
      </button>

      {{ c4 }}
    </div>
    <div>
      <button
          @click="b5"
          class="b5"
      >
        Создать 10 цифр(начиная с 0 с шагом 2)
      </button>

      {{ c5 }}
    </div>
    <div>
      <button
          @click="b6"
          class="b6"
      >
        Создать 10 цифр(начиная с 1 с шагом 2)
      </button>

      {{ c6 }}
    </div>
    <div>
      <button
          @click="b7"
          class="b7"
      >
        Создать 20 цифр(начиная с 1, каждая четная цифра - красная)
      </button>

      <span
        v-for="i in c7"
        :class="{ 'red' : i % 2 === 0}"
      >
        {{ i }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.red{
  color: red
}
</style>