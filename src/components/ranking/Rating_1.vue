<script setup lang="ts">

  import { reactive, ref, type PropType, computed } from 'vue'
  import Question from '@/components/Question.vue'

  interface Ranking {
    question      : string,
    instruction   : string,
    totalAnswers  : number, 
    options       : Option[]
  }

  interface Option {
    text: string
    value: number
  }


  const props = defineProps({
    ranking: {
        type: Object as PropType<Ranking>,
        required: true,
        validator: (value : Ranking) => {
          return value.totalAnswers <= value.options.length
        }
    }
  })

  const question = ref(props.ranking.question)
  const instruction = ref(props.ranking.instruction)
  const numberOfAnswers = ref(props.ranking.totalAnswers)
  const options : any[] = reactive(props.ranking.options.map( x => ({...x, selected: false })))
  const fullAnswers = reactive([...Array(numberOfAnswers.value)].map(
      (_, index) => ({ order:index + 1, text: null, value: null})
  ))

  const flatAnswers = computed(() => fullAnswers.map( x => x.value ))

  const selectAnswer = (option : any) => {
    const items = fullAnswers.filter(x => x.text == null);
    if(items.length===0) return
    items[0].text = option.text
    items[0].value = option.value
    option.selected = !option.selected 
  }

  const clearAnswer = ( answer : any ) => {
    const option = options.find(x => x.value == answer.value)
    option.selected = false
    answer.text = null
    answer.value = null
    reorderAnswers()
  }

  const reorderAnswers = () => {
    for(var i=0; i<fullAnswers.length-1; i++){
      if( fullAnswers[i].value === null){
        fullAnswers[i].text = fullAnswers[i+1].text
        fullAnswers[i].value = fullAnswers[i+1].value
        fullAnswers[i+1].text= null
        fullAnswers[i+1].value = null
      }
    }
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
    <div class="ranking-result">
      Top {{ numberOfAnswers }}:
      <div v-for="(answer, index) in fullAnswers" :key="index"
          class="ranking-result-item"
          :class="{ 'ranking-result-item-selected': answer.text }"> 
        <span>{{ index + 1 }}</span>
        <span>{{ answer.text ||  'NO CHOICE' }} </span>
        <span>
          <button v-if="answer.text" 
                @click="clearAnswer(answer)">
                X
          </button>
        </span>
      </div>
    </div>

    <div class="ranking-options">
      <button v-for="option in options" 
           :key="option.value"
           @click="selectAnswer(option)"
           :disabled="option.selected"> 
        {{ option.text }}
      </button>
    </div>
  </div>

  <template #code>
    <div>FLAT OUTPUT:<br>{{ flatAnswers }}</div>
    <br>
    <div>FULL OUTPUT:<br>{{ fullAnswers }}</div>
  </template>

</Question>

</template> 

<style lang="scss" scoped>

.ranking{
  font-weight: bold;
  padding-bottom: 1rem;


  .ranking-options{
    display: flex;
    flex-flow: column;
    gap: 1rem;
    margin: 1rem 0;
    
    button{
      background-color: #eef5ff;
      border: 3px solid #bed6fd;
      color: #535353;
      border-radius: .75rem;
      padding:.5rem .75rem ;
      text-align: left;
      font-weight: 500;

      &:enabled{

        &:hover{
          cursor: pointer;
          background: #deecff;
          border-color: #80aef8;
          color: #414141;
        }
      }

      &:disabled{
        background: #e9e9e9;
        border-color: #d6d6d6;
      }
    }
  }

  .ranking-result{
    display: flex;
    flex-flow: column;
    gap: 1rem;
    padding-bottom: 1rem;
    font-weight: 500;

    .ranking-result-item{
      border: 3px dashed #acacac;
      color: #acacac;
      border-radius: .75rem;
      padding:.5rem .75rem ;
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      font-weight: bold;
    }

    .ranking-result-item-selected{
      background:#deecff;
      color: #80aef8;
      border: 3px solid #80aef8;

      button{
        background: transparent;
        border-radius: .75rem;
        color: #80aef8;
        border-width: 0;
        font-weight: bold;

        &:hover{
          cursor: pointer;
        }
      }
    }
  }
}



</style>
