<script setup lang="ts">
import { ref } from 'vue'

const textInput = ref('')
const textareaInput = ref('')
const checkboxInput = ref(false)
const radioInput = ref('')
const selectInput = ref('')
</script>

<template>
  <form>
    <!-- TODO: Lier ces inputs avec v-model -->
    <input type="text" v-model="textInput"/>
    <textarea v-model="textareaInput"></textarea>
    <input type="checkbox" v-model="checkboxInput">/>

    <input type="radio" value="one" v-model="radioInput" />
    <input type="radio" value="two" v-model="radioInput" />

    <select v-model="selectInput">
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
    </select>
  </form>
</template>
