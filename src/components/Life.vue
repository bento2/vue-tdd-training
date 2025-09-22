<script setup lang="ts">
// TODO :
// - Ajouter onMounted() pour afficher "Monté"
// - Ajouter onUnmounted() pour afficher "Détruit"
import {onMounted, onUnmounted, ref} from "vue";
const status = ref("")
onMounted(()=>{
  status.value = "Monté"
})

onUnmounted(()=> status.value = "Détruit")
</script>

<template>
  {{ status }}
</template>
