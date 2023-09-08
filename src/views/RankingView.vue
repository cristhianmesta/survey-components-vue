<script setup lang="ts">

import { ref } from 'vue'

import Rating_1 from '@/components/Ranking/Rating_1.vue';
import Rating_2 from '@/components/Ranking/Rating_2.vue';


let ranking_1 = {
  question    : 'R1. Rankiar las opciones según su preferencia:',
  instruction: 'Seleccionar las 3 mejores opciones en orden de importancia',
  totalAnswers: 3,
  options : [
    { text: "Opción A", value: 1 },
    { text: "Opción B", value: 2 },
    { text: "Opción C", value: 3 },
    { text: "Opción D", value: 4 },
    { text: "Opción E", value: 5 },
  ]
}

let ranking_2 = {
  question    : 'R2. Rankiar las opciones según su preferencia:',
  instruction: 'Aqui debería ordenar las opciones.',
  options : [
    { text: "Opción A", value: 1 },
    { text: "Opción B", value: 2 },
    { text: "Opción C", value: 3 },
    { text: "Opción D", value: 4 },
    { text: "Opción E", value: 5 },
  ]
}

const type = ref(1)

const setType = (value : number) => type.value = value

</script>

<template>
  <div class="view">
    <section class="view-menu">
      <nav>
        <button @click="type=1">Ranking_1</button>
        <button @click="type=2">Ranking_2</button>
      </nav>
    </section>
    <section class="view-body">
      <Rating_1 v-if="type===1" :ranking="ranking_1" />  
      <Rating_2 v-if="type===2" :ranking="ranking_2" />
    </section>
  </div>
</template>


<style lang="scss" scoped>

.view{
  display: flex;
  gap: 2rem;
}

.view-menu{
  width: 25%;

  nav{
    display: flex;
    flex-direction: column;
    gap:1rem;

    button{
      border: none;
      background: none;;
    }
  }
}

.view-body{
  width: 100%;
}

</style>
