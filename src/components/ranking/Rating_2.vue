<script setup lang="ts">

  import { ref, type PropType } from 'vue'
  import draggable from 'vuedraggable';
  import Question from '@/components/Question.vue'

  interface Ranking {
    question      : string,
    instruction   : string,
    options       : Option[]
  }

  interface Option {
    text: string
    value: number
  }

  const props = defineProps({
    ranking: {
        type: Object as PropType<Ranking>,
        required: true
    }
  })

  const question = ref(props.ranking.question)
  const instruction = ref(props.ranking.instruction)
  const options  = ref(props.ranking.options) 

  const results  = ref(props.ranking.options.map( (x, index)=> ({order: index +1, ...x}) )) 

  const updateResults = () => {
    results.value = [...options.value.map( (x, index)=> ({order: index +1, ...x}) )]
  }



</script>

<template>

  <Question>

    <template #text>
      {{ question }}
    </template>

    <template #instruction v-if="instruction!==null">
      {{ instruction }}
    </template>
    <div class="ranking">
      <draggable v-model="options" 
                    item-key="value" 
                    :animation="300"
                    class="list-group"
                    @end="updateResults" >
            <template #item="{element, index }">
                <div class="list-group-item"> {{ index+1  }} :: {{element.text }} </div>
            </template>
      </draggable>
    </div>

    <template #code>
      {{  results }}
    </template>

  </Question>

</template>

<style lang="scss" scoped>


.ranking{
  font-weight: bold;
  padding-bottom: 1rem;


  .list-group{
    display: flex;
    flex-flow: column;
    gap: 1rem;
    margin: 1rem 0;
    
    .list-group-item{
      border: 3px solid #bed6fd;
      background-color: #eef5ff;
      color: #414141;
      border-radius: .75rem;
      padding:.5rem .75rem ;
      text-align: left;
      font-weight: 500;
      cursor: move;

      i{
        cursor: pointer;
      }
    }
  }


}



</style>
