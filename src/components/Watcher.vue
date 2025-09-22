<script setup lang="ts">
import {ref, watch} from 'vue'

const message = ref('Hello')
const log = ref('')

// TODO:
// - Créer un watcher qui observe les changements de `message`
// - Quand `message` change, ajouter "Message changed to: [new value]" au `log`
watch(message,(newMessage,oldMessage)=>{
  log.value+= `Message changed to: ${newMessage}`
})
</script>

<template>
  <div>
    <input v-model="message" />
    <p>{{ log }}</p>
  </div>
</template>
