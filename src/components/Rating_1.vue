<script setup lang="ts">

  import { reactive, ref, type PropType } from 'vue'
  import {  } from 'vue'

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
  const answers = reactive([...Array(numberOfAnswers.value)].map(
      (_, index) => ({ order:index + 1, text: null, value: null})
  ))

  const selectAnswer = (option : any) => {
    const items = answers.filter(x => x.text == null);
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
    for(var i=0; i<answers.length-1; i++){
      if( answers[i].value === null){
        answers[i].text = answers[i+1].text
        answers[i].value = answers[i+1].value
        answers[i+1].text= null
        answers[i+1].value = null
      }
    }
  }


</script>

<template>
  <section class="ranking">
    <div class="ranking-text">
        {{ question }}
    </div>
    <div class="ranking-instructions" 
         v-if="instruction!==null">
        {{ instruction }}
    </div>
    <div class="ranking-options">
      <button v-for="option in options" 
           :key="option.value"
           @click="selectAnswer(option)"
           :disabled="option.selected"> 
        {{ option.text }}
      </button>
    </div>
  </section>

  <section class="result">
    Top {{ numberOfAnswers }}:
    <div v-for="(answer, index) in answers" :key="index"
         class="result-item"
         :class="{ 'result-item-selected': answer.text }"> 
      <span>{{ index + 1 }}</span>
      <span>{{ answer.text ||  'NO CHOICE' }} </span>
      <span>
        <button v-if="answer.text" 
              @click="clearAnswer(answer)">
              X
        </button>
      </span>
    </div>
  </section>

  <section class="code">
    <pre>{{  answers  }}</pre>
  </section>
</template>

<style lang="scss" scoped>

.ranking{
  font-weight: bold;
  padding-bottom: 1rem;

  .ranking-text{
    font-weight: 500;
  }

  .ranking-instructions{
    font-weight: 500;
    color: rgb(173, 173, 173);
  }

  .ranking-options{
    display: flex;
    flex-flow: column;
    gap: 1rem;
    margin: 1rem 0;
    
    button{
      border: 3px solid #b3b3b3;
      border-radius: .75rem;
      padding:.5rem .75rem ;
      text-align: left;
      font-weight: 500;

      &:enabled{
        color: #747474;

        &:hover{
          cursor: pointer;
          background: #eed1ff;
          border-color: #b536ff;
          color: #b536ff;
        }
      }

      &:disabled{
        background: #a1a1a1;
        color: #797979;
      }
    }
  }
}

.result{
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding-bottom: 1rem;
  font-weight: 500;

  .result-item{
    border: 3px dashed #acacac;
    color: #acacac;
    border-radius: .75rem;
    padding:.5rem .75rem ;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    font-weight: bold;
  }

  .result-item-selected{
    background:#eed1ff;
    color: #b536ff;
    border: 2px solid #b536ff;

    button{
      background: rgb(181, 54, 255);
      border-radius: .75rem;
      color: #eed1ff;;
      border-width: 0;
      padding: .1rem .4rem;

      &:hover{
        cursor: pointer;
      }
    }
  }

}

</style>
