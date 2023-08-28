<script setup lang="ts">

  import { reactive, ref, type PropType } from 'vue'
  import {  } from 'vue'

  interface Ranking {
    question      : string,
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
  <section class="answer">
    <p>{{ question }}</p>
    <div class="options">
      <button v-for="option in options" :key="option.value"
           @click="selectAnswer(option)"
           class="options-item"
           :class="{ blocked: option.selected }"
           :disabled="option.selected"> 
        {{ option.text }}
      </button>
    </div>
  </section>

  <section class="result">
    Ranking:
    <div v-for="(answer, index) in answers" :key="index"
         class="result-item"
         :class="{ selected: answer.text }"> 
      <div>{{ index + 1 }}</div>
      <div>{{  answer.text ||  'SIN OPCIÓN' }} </div>
      <div >
        <button v-if="answer.text" 
                @click="clearAnswer(answer)">
                X
              </button>
      </div>
    </div>
  </section>

  <section class="result-code">
    <pre>{{  answers  }}</pre>
  </section>
</template>

<style scoped>

*{
  box-sizing: border-box;
}

.answer{
  font-weight: bold;
  padding-bottom: 1rem;
}

.options{
  display: flex;
  flex-flow: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.options-item{
  border: 2px solid rgb(179, 179, 179);
  padding: .5rem;
  text-align: left;
}

.options-item:hover:enabled{
  cursor: pointer;
  background: rgb(230, 230, 230);
  border: 2px solid rgb(181, 54, 255);
  color: rgb(181, 54, 255);
}

.blocked{
  padding: .5rem;
  background: rgb(230, 230, 230);
  color: rgb(179, 179, 179);
}

.result{
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding-bottom: 1rem;
}

.result-item{
  border: 2px dashed rgb(172, 172, 172);
  padding: .5rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.selected{
  padding: .5rem;
  background:rgb(238, 209, 255);
  color: rgb(181, 54, 255);
}

.selected>div{
  font-weight: bold;
}

.result-code{
  color: white;
  background: rgb(50, 46, 58);
  padding: 1rem;
  font-size: .8rem;
}

</style>
