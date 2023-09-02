<script setup lang="ts">

import Rating_2 from '@/components/Rating_2.vue';

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

</script>

<template>
  <main>
    <Rating_2 :ranking="ranking_2" />
  </main>
</template>
