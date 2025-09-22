<script setup lang="ts">
// TODO :
// - Déclarer une prop "title" affichée sur un bouton
import {ref} from "vue";

const props = defineProps({title: null})
const increment = ref(0)
// - Déclarer un événement "increment" émis au clic sur le bouton
const emit = defineEmits(['increment'])
const incrementHandle = () => {
  increment.value++
  emit('increment', increment)
}
</script>

<template>
  <!-- TODO : afficher un bouton avec le title et émettre l'event -->
  <button type="button" @click="incrementHandle">{{ props.title }}</button>
</template>
