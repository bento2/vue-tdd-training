<script setup lang="ts">
// TODO :
// - Créer un compteur réactif qui démarre à 0
import {ref} from "vue";

const compteur = ref(0)
// - Ajouter un bouton qui incrémente le compteur


</script>

<template>
  <!-- TODO : afficher le compteur et le bouton -->
  <button @click="compteur++" type="button">{{ compteur }}</button>
</template>
