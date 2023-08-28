<script setup lang="ts">

import Rating_1 from '@/components/Rating_1.vue';

let ranking_1 = {
  question    : 'Rankiar las opciones según su preferencia:',
  totalAnswers: 3,
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
    <Rating_1 :ranking="ranking_1" />
  </main>
</template>
