<script setup lang="ts">
// TODO :
// - Créer un objet réactif avec { x: 0, y: 0 }
// - Ajouter deux boutons pour incrémenter x et y séparément

import {reactive, ref} from "vue";

const objet = ref({x: 0, y: 0});
defineExpose({ objet })//pour le test
</script>

<template>
  <!-- TODO : afficher x, y et les boutons -->

  <button type="button" @click="objet.x++">x: {{ objet.x }}</button>

  <button type="button" @click="objet.y++">y: {{ objet.y }}</button>
</template>
