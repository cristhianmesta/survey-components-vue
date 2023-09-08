<script lang="ts" setup>
  
import CodeBox from '@/components/CodeBox.vue'

</script>

<template>
    <section class="question">
        <div class="question-text">
            <slot name="text"></slot>
        </div>
        <div class="question-instructions">
            <slot name="instruction"></slot>
        </div>
        <div class="question-body">
            <slot></slot>
        </div>

        <div class="question-code">
          <CodeBox>
            <slot name="code"></slot>
          </CodeBox>
        </div>
    </section>
</template>


<style lang="scss" scoped>

.question{

  display: flex;
  flex-direction: column;

  .question-text{
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: .5rem;
  }

  .question-instructions{
    font-weight: 500;
    margin-bottom: .5rem;
    color: #adadad;
  }

}

</style>
