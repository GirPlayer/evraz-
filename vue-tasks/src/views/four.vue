<script setup>
import {ref} from "vue";

let nums = ref([])

function squares(){
  let num = 0;
  while (num !== 4){
    num = +prompt('1-красный, 2-синий, 3-зелёный, 4-стоп')
    nums.value.push(num)
  }
}

squares()
</script>

<template>
  <div class="blocks">
    <div
      v-for="a in nums"
      :class="{ 'block1' : a === 1, 'block2' : a === 2, 'block3' : a === 3}"
    >

    </div>
  </div>
</template>

<style scoped>
.blocks{
  display: flex;
}
.block1{
  background-color: red;
  width: 200px;
  height: 200px;
}
.block2{
  background-color: blue;
  width: 200px;
  height: 200px;
}
.block3{
  background-color: green;
  width: 200px;
  height: 200px;
}

</style>