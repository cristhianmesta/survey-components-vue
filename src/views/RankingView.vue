<script setup lang="ts">

import { ref } from 'vue'

import Rating_1 from '@/components/Ranking/Rating_1.vue';
import Rating_2 from '@/components/Ranking/Rating_2.vue';


let ranking_1 = {
  question    : 'R1. Elegir los 3 mejores futbolista de la historia:',
  instruction: 'Hacer clic sobre la opción más a menos importante',
  totalAnswers: 3,
  options : [
    { text: 'Pelé', value: 1 },
    { text: "Diego Armando Maradona", value: 2 },
    { text: "Cristiano Ronaldo", value: 3 },
    { text: "Lionel Messi", value: 4 },
    { text: "Ronaldinho", value: 5 },
  ]
}

let ranking_2 = {
  question    : 'R2. Ordenar las peliculas según su preferencia.',
  instruction: 'Arrastar la opción a la posición de su preferencia.',
  options : [
    { text: "Volver al futuro", value: 1 },
    { text: "El padrino", value: 2 },
    { text: "Forrest Gump", value: 3 },
    { text: "El silencio de los inocentes", value: 4 },
    { text: "Vértigo", value: 5 },
  ]
}

const type = ref(1)

const setType = (value : number) => type.value = value

</script>

<template>
  <div class="view">
    <section class="view-menu">
      <nav>
        <button @click="type=1" :class="{ 'view-menu-active': type===1}">Ranking 1 (Top)</button>
        <button @click="type=2" :class="{ 'view-menu-active': type===2}">Ranking 2 (Sort)</button>
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
      padding: .5rem ;
      border: none;
      border-radius: .5rem;
      color: #ffffff;
      background-color: #9c9ea2;

    }

    .view-menu-active{
      color: #ffffff;
      background-color: #383838;
    }
  }
}

.view-body{
  width: 100%;
}

</style>
