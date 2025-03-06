<script setup>
import axios from "axios";
import { ref, computed, onMounted } from 'vue'


let images = ref([])

let currentIndex = ref(-1)

let animal = ref ('cat')

let currentImage = computed(() => {
  return images.value[currentIndex.value] || ''
})

async function getImage(){
  let url = 'https://api.thedogapi.com/v1/images/search'

  if (animal.value === 'cat'){
    url = 'https://api.thecatapi.com/v1/images/search'
  }
  let response = await axios.get(url)
  let newImage = response.data[0].url
  images.value.push(newImage)
  currentIndex.value = images.value.length - 1
}

function goBack(){
  currentIndex.value = currentIndex.value - 1
}

function goNext(){
  if (currentIndex.value === images.value.length) {
    getImage()
  }
  else{
    currentIndex.value = currentIndex.value + 1
  }
}

onMounted(() => {
  getImage()
})

function cats(){
  animal.value = 'cat'
  getImage()
}

function dogs(){
  animal.value = 'dog'
  getImage()
}
</script>


<template>
<button
    @click="dogs"
    class="dogs"
>
  Собаки
</button >

<button
    @click="cats"
    class="cats"
>
  Коты
</button>
<div class="pets-slider">
  <button
      v-if="currentIndex > 0"
      @click="goBack"
      class="button-prev"
  >
  <-
  </button>

  <img class="pet-image" :src="currentImage" alt="">

  <button
      @click="goNext"
      class="button-next"
  >
    ->
  </button>
</div>
</template>


<style scoped>

</style>
