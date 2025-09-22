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
    <input type="text" />
    <textarea></textarea>
    <input type="checkbox" />

    <input type="radio" value="one" />
    <input type="radio" value="two" />

    <select>
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
    </select>
  </form>
</template>
