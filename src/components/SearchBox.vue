<script setup lang="ts">
// TODO :
// - Créer une ref search
import {ref} from "vue";

const search = ref("")
// - Ajouter un input lié à search via v-model
// - Afficher un texte "Recherche : <search>" à chaque modification
</script>

<template>
  <!-- TODO : input + affichage dynamique -->
  <input type="text" v-model="search"/>
  <div class="search-box">Recherche : {{ search ?? ""}}</div>
</template>
